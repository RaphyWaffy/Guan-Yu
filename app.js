/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    'use strict';
    /** Hide all aprt from earliest entry in timeline**/
    $(".2").hide();
    $(".3").hide();
    $(".4").hide();

/**Fuctions that change which div will be on display**/
    $('.era1').click(function () {
        $(".1").show();
        $(".2").hide();
        $(".3").hide();
    });
    $('.era2').click(function () {
        $(".1").hide();
        $(".2").show();
        $(".3").hide();
        $(".4").hide();
    });
    $('.era3').click(function () {
        $(".1").hide();
        $(".2").hide();
        $(".3").show();
        $(".4").hide();
    });
    $('.era4').click(function () {
        $(".1").hide();
        $(".2").hide();
        $(".3").hide();
        $(".4").show();
    });
});
