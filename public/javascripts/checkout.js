Stripe.setPublishableKey('pk_test_TYooMQauvdEDq54NiTphI7jx');

var $form = $('#checkout-form');

$form.submit(function(event){
    $('#charge-error').addClass('hidden');
    $form.find('button').prop('disabled',true);
    Stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val(),
        name: $('#card-name').val()
    },stripeResponseHandler);
    return false;
});

function stripeResponseHandler(status, response){
    if(response.error){//problem

        // show the errors on the form
        $('#charge-error').text(response.error.message);
        $('#charge-error').removeClass('hidden');
        $form.find('button').prop('disabled',false); // re-enable submission
    }else{ //Token was created
        
        //get the token ID
        var token = response.id;

        //insert the token into the form so it gets submitted to the server
        $form.append($('<input type="hidden" name ="stripeToken" />').val(token));
        
        //submit the form
        $form.get(0).submit();
    }
}