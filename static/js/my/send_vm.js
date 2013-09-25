define(['jquery','knockout'], function($, ko){

    var
        selectedAudience   = ko.observable()

    return {
        selectedAudience: selectedAudience
    }
});