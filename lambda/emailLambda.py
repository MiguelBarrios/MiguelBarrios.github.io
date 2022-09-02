import smtplib
from email.message import EmailMessage

EMAIL_ADDRESS = 'miguelb.server@gmail.com'
EMAIL_PASSWORD = 'cvbjhpvrseutvbud'
msg = EmailMessage()
msg['Subject'] = 'This is my first Python email'
msg['From'] = EMAIL_ADDRESS 
msg['To'] = 'miguelbarriosdavila@gmail.com' 
msg.set_content('And it actually works')

try:
	with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
		smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD) 
		smtp.send_message(msg)
		print("success")
except:
	print("Error")
