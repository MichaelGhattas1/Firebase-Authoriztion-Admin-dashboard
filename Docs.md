
## Intro
# Admin dashboard for add / get / update / delete Ads 

## Get start

# authentication using firebase via phone number
# Admin enter his phone number then press get code then firebase cloud send otp code to this phone    number 

# auth Gurd is created to prevent any user from navigate in web site 
# saving varification ID in local storage 
# site navigate to code page 
# Admin enters the code which he recived on his phone number 
# by clicking verify code using firebase with phone credintials 
# firebase checking if authenticate with credintial return success 
# if success site navigate to Dashboard page 

## Add Button on dashboard 
# fetching data from url , image or video , start time and end time inputs 
# calling Add function from ads service which it add new object in behaviorSubject array which is real time render on view (DOM)

## Update Button 
# if admin want to update any field in existing ad he press update button which is found under every ad
# by click this button we fetch the Ad index to be the current index and set inputs with Ad data 
# Admin can update in any input value the click update
# updating function replace the old object with newest one real time
# then calling clear function which clear the value of input 

## Delete 
# under each Ad there is a delete button 
# by clicking on it we send the index of Ad to delete function in Ads Service which delete the Ad from array and set the value of new array 
# view render again without the deleted Ad 

## LogOut 
# on dashboard there is a log out button on the top-left 
# by clicking this button i delete the user data from local storage 
# navigate to login page 


