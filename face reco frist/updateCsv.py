import numpy as np
import pandas as pd

def add_row(pKey):
    df = pd.read_csv('Attendance.csv')
    dict = {'Name' : pKey,
            'Attendance' : 0
    }
    df = df.append(dict, ignore_index = True)
    df.to_csv('Attendance.csv', index = False)


# for one using in loop
def attendance_loop(pKey):
    df = pd.read_csv('Attendance.csv')
    df.loc[df['Name']==pKey, 'Attendance'] +=1
    df.to_csv('Attendance.csv', index = False)



# for passing a list
def attendance_list(pkey):
    df = pd.read_csv('Attendance.csv')
    
    for key in pkey:
        df.loc[df['Name']==key,'Attendance'] +=1
    df.to_csv('Attendance.csv', index = False)


# name = input()
# # print(name)
# attendance_loop(name)
# print(pd.read_csv('Attendance.csv'))
