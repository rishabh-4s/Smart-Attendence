import cv2
import numpy as np
import face_recognition
import os
from updateCsv import attendance_loop
from updateSheet import update_gsheet


path = 'Training_images'
images = []
classNames = []
myList = os.listdir(path)
print(myList)
for cl in myList:
    curImg = cv2.imread(f'{path}/{cl}')
    images.append(curImg)
    classNames.append(os.path.splitext(cl)[0])
print(classNames)


def findEncodings(images):
    encodeList = []


    for img in images:
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        encode = face_recognition.face_encodings(img)[0]
        encodeList.append(encode)
    return encodeList


# function to update the attendance of present students
# unfinished, work in progress
def attendance(name):
    with open ('Attendance.csv', 'r+') as f:
        myDataList = f.readlines()
        
        nameList = []
        int = 1
        if not len(myDataList):
            f.writelines(f'\n{name}, {int}')
        else:
            for line in myDataList:
                entry = line.split(',')
                nameList.append(entry[0])

            if name not in nameList:
                f.writelines(f'\n{name}, {int}')


encodeListKnown = findEncodings(images)
print('Encoding Complete')

cap = cv2.imread('testing_images/face_test_9.jpeg')

students = classNames.copy()

# imgS = cv2.resize(img, (0, 0), None, 0.25, 0.25)
imgS = cv2.cvtColor(cap, cv2.COLOR_BGR2RGB)

facesCurFrame = face_recognition.face_locations(imgS)
encodesCurFrame = face_recognition.face_encodings(imgS, facesCurFrame)

for encodeFace, faceLoc in zip(encodesCurFrame, facesCurFrame):
    matches = face_recognition.compare_faces(encodeListKnown, encodeFace)
    faceDis = face_recognition.face_distance(encodeListKnown, encodeFace)
    matchIndex = np.argmin(faceDis)

    if matches[matchIndex]:
        name = classNames[matchIndex].lower()
        if name in students:
            print(name)
            attendance_loop(name)
            students.remove(name)

update_gsheet()
