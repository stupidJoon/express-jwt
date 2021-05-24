# express-jwt
express jwt auth server without password encryption

# API 

/auth  
check token is available  

/auth/signin  
sign in and make token and add token to cookie['token']  

/auth/signup  
sign up if id is not duplicated  

# DB  
USER: test  
PASSWORD: test  
DATABASE: express_jwt  
TABLE: users  
| Field    | Type         | Null | Key | Default | Extra |
|----------|--------------|------|-----|---------|-------|
| id       | varchar(255) | NO   | PRI | NULL    |       |
| password | varchar(255) | YES  |     | NULL    |       |
