import cv2
import numpy as np
import face_recognition
import os

# function to encode the images and extract their features
# pass images ki list, returns encodings ki list
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

path = 'training_images'
images = []
classNames = []

# importing images
myList = os.listdir(path)
print(myList)

# making list of labesl
for cl in myList:
    curImg = cv2.imread(f'{path}/{cl}')
    images.append(curImg)
    classNames.append(os.path.splitext(cl)[0])
print(classNames)


encodeListKnown = findEncodings(images)
print('Encoding Complete')

# testing image
cap = cv2.imread('testing_images/face_test_4.jpg')
cv2.imshow('hi', cap)
cv2.waitKey(0)


students = classNames.copy()

# img = cap
# imgS = cv2.resize(img, (0, 0), None, 0.25, 0.25)

# opencv reads in bgr format, dlib works in rgb so conversion
imgS = cv2.cvtColor(cap, cv2.COLOR_BGR2RGB)

facesCurFrame = face_recognition.face_locations(imgS)
encodesCurFrame = face_recognition.face_encodings(imgS, facesCurFrame)

# matching faces and printing the names
for encodeFace, faceLoc in zip(encodesCurFrame, facesCurFrame):
    matches = face_recognition.compare_faces(encodeListKnown, encodeFace)
    faceDis = face_recognition.face_distance(encodeListKnown, encodeFace)
    matchIndex = np.argmin(faceDis)

    if matches[matchIndex]:
        name = classNames[matchIndex].upper()
        if name in students:
            print(name)
            attendance(name)
            students.remove(name)