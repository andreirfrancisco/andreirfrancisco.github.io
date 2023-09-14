class Payment:
    def __init__(self, user_name, password, email, amount, time,status):
        self.user_name = user_name
        self.password = password
        self.email = email
        self.amount = amount
        self.time = time
        self.status = status
    @staticmethod
    def organize(payments):
        for pay in payments:
            print(f"Payment: {pay.user_name}, Password: {pay.password}, Email: {pay.email}, Amount: {pay.amount}, Time: {pay.time}")
    def receive(payments):
        for pay in payments:
            #  confirms if payment was hold true
            if Payment.amount == 20 : 
                 Payment.status = True
                 # allows user to page
                 return True
            else : 
                 Payment.status = False
                 return False
class Session(Payment):
    times = {}
    for i in range(0,8):
         times.append[i+8]
    def calendar(Session):
            # creates a red block if not avaiable 
            times = {}
            for i in range(0,8):
                times.append[i+8]
            access = {True, False}
            if Session.receive == True:
                 return times
                 # print calendar here 
            else: 
                 # do not allow yuser
                 return 0
    def avaiable(Session):
        if Session.status == True : 
             print("Class")
        else : 
             print("Organize")










# # Example usage:
# payment1 = Payment("user1", "password1", "user1@example.com", 100, "2023-09-05")
# payment2 = Payment("user2", "password2", "user2@example.com", 200, "2023-09-06")
# payments_list = [payment1, payment2]

# Payment.organize(payments_list)
