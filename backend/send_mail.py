from smtplib import SMTP_SSL
from email.mime.text import MIMEText

def renderMail(html, **kwargs):
    raw = open("templates/" + html).read()
    split_raw = raw.split("}}")
    sp = []
    for i in split_raw:
        sp.extend(i.split("{{"))
    mail = []
    for i in sp:
        if i in kwargs:
            mail.append(kwargs[i])
        else:
            mail.append(i)
    return "".join(mail)

def sendMail(client_mail, message, header, server_mail, server_pass):
    msg = MIMEText(message, "html", "utf-8")
    msg['Subject'] = header
    msg['From'] = server_mail
    msg['To'] = client_mail
    if "yandex" in server_mail:
        smtp = SMTP_SSL('smtp.yandex.ru')
    else:
        smtp = SMTP_SSL('smtp.gmail.com')
    smtp.login(server_mail, server_pass)
    smtp.sendmail(server_mail, client_mail, msg.as_string())
    smtp.quit()


