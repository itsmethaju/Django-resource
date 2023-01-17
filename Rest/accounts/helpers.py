import http.client

# def send_forget_password_mail(email , token ):
#     subject = 'Your forget password link'
#     message = f'Hi , click on the link to reset your password http://127.0.0.1:8000/change-password/{token}/'
#     email_from = settings.EMAIL_HOST_USER
#     recipient_list = [email]
#     send_mail(subject, message, email_from, recipient_list)
#     return True



def send_forget_password_mail(email , token):
    email =email
    token = token

    print(email , token)
    import http.client

    conn = http.client.HTTPSConnection("rapidprod-sendgrid-v1.p.rapidapi.com")

    payload = "{\r\n    \"personalizations\": [\r\n {\r\n \"to\": [\r\n {\r\n \"email\": \""+email+"\"\r\n  }\r\n   ],\r\n   \"subject\": \"Password Reset\"\r\n        }\r\n    ],\r\n    \"from\": {\r\n        \"email\": \"itsthaju.me@gmail.com\"\r\n    },\r\n    \"content\": [\r\n        {\r\n            \"type\": \"text/plain\",\r\n            \"value\": \"'Hi , click on the link to reset your password http://127.0.0.1:8000/change-password/"+token+"/\"\r\n        }\r\n    ]\r\n}"
    headers = {
        'content-type': "application/json",
        'X-RapidAPI-Key': "aff2bbad66msh42f1104cdd14d17p1a1623jsn9fc0a964ccb2",
        'X-RapidAPI-Host': "rapidprod-sendgrid-v1.p.rapidapi.com"
        }

    conn.request("POST", "/mail/send", payload, headers)

    res = conn.getresponse()
    data = res.read()


    print(data.decode("utf-8"))
    return True


