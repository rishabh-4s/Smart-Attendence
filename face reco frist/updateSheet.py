import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd


def update_gsheet():
    scope = ['https://www.googleapis.com/auth/spreadsheets',
            "https://www.googleapis.com/auth/drive"]

    credentials = ServiceAccountCredentials.from_json_keyfile_name("smart-attendance-system-370014-d691ad340ff6.json", scope)
    client = gspread.authorize(credentials)

    sheet = client.open("NewDatabase").sheet1
    # read csv with pandas
    df = pd.read_csv('Attendance.csv')
    # # export df to a sheet
    sheet.update([df.columns.values.tolist()] + df.values.tolist())


