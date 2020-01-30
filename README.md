# busMall

Technical Plan
*****************

1) Two pages will need to be created
    - main page (index.html)
    - results page (results.html)
2) JSON data will need to be created in data.js
    - an array of 20 products to be default exported
    - three key/value pairs
        > id
        > name
        > img url
3) Product Array as a Class
    - constructs a slice (copy) of jason Data 
    - getByID function
    - remove products function 
        >after items are selected remove the product from slice
    - hasAnyProducts function (are there any products left in array after remove products function
    - get random product function
        > generate random number with math.random and math.floor function

4) APP.js page to do all the work
    - will need to import the data array or sliced data array
    - need to import findByID function
    - keep track of number of clicks
    - generate three random products
        > while statements to compare the three random products and make sure they do not match using comparison operators (or ||)
        > match the random number generated to the product to populate data
        > populate dom with the three products using html tags
            * name of product <h2>
            * img <img>
            * label / radio button for selection <label> <button>
            * center items side by side using CSS
            * after click refresh with new data
    - keep track of session data in an array (ie votes)
        > done with findbyID routine comparing the vote data received from DOM to the existing current session array
        >reset session array after 25 clicks
        > navigate to results page after clicks
   