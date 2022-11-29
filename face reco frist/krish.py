import cv2
import numpy as np
import face_recognition
import os

path = 'training_images'
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
    print(encodeList)
    return encodeList


encodeListKnown = findEncodings(images)
print('Encoding Complete')

cap = cv2.imread('testing_images/face_test_9.jpeg')


students = classNames.copy()
# print(students)
# while True:
img = cap
# imgS = cv2.resize(img, (0, 0), None, 0.25, 0.25)
imgS = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

facesCurFrame = face_recognition.face_locations(imgS)
print(facesCurFrame)
encodesCurFrame = face_recognition.face_encodings(imgS, facesCurFrame)

for encodeFace, faceLoc in zip(encodesCurFrame, facesCurFrame):
    matches = face_recognition.compare_faces(encodeListKnown, encodeFace)
    faceDis = face_recognition.face_distance(encodeListKnown, encodeFace)
    # print(faceDis)
    matchIndex = np.argmin(faceDis)

    if matches[matchIndex]:
        name = classNames[matchIndex].lower()
        # print("----------")
        # print(name)
        # print(students)
        if name in students:
            print(name)
            students.remove(name)
            # y1, x2, y2, x1 = faceLoc
            # y1, x2, y2, x1 = y1 * 4, x2 * 4, y2 * 4, x1 * 4
            # cv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)
            # cv2.rectangle(img, (x1, y2 - 35), (x2, y2), (0, 255, 0), cv2.FILLED)
            # cv2.putText(img, name, (x1 + 6, y2 - 6), cv2.FONT_HERSHEY_COMPLEX, 1,(255, 255, 255), 2)
            # width = int(img.shape[1] * 0.25)
            # height = int(img.shape[0] * 0.25)
            # dimensions = (width, height)
            # cv2.resize(img, dimensions, interpolation=cv2.INTER_AREA)
            # cv2.imshow('hi', img)
            # cv2.waitKey(0)
# width = int(img.shape[1] * 0.25)
# height = int(img.shape[0] * 0.25)
# dimensions = (width, height)
# cv2.resize(img, dimensions, interpolation=cv2.INTER_AREA)
# cv2.imshow('hi', img)
# cv2.waitKey(0)
# cv2.waitKey(1)