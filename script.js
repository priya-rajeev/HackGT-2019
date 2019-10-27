var fancyText = document.getElementById('fancy');
var intervalTime = 150;
var initialPause = 500;
var callbackPause = 500;

function deleteContent(callback) {

    var intervalId = setInterval(function() {
        if (fancyText.innerHTML.length == 0) {
            clearInterval(intervalId);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        fancyText.innerHTML = fancyText.innerHTML.substring(0, fancyText.innerHTML.length - 1);
    }, intervalTime);
}

function addContent(contentToAdd, callback) {
    var currentIndex = 0;

    var intervalId = setInterval(function() {
        if (currentIndex == contentToAdd.length) {
            clearInterval(intervalId);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        fancyText.innerHTML = contentToAdd.substring(0, currentIndex);
        currentIndex++;
    }, intervalTime);
}

setTimeout(function() {
    deleteContent(function() {
        addContent("HackGTeeny WorkShop", function() {
            deleteContent(function() {
                addContent("Pikachu fan site", function() {
                    deleteContent(function() {
                        addContent("Web Dev 101 Course");
                    })
                });
            });
        });
    });
}, initialPause);

// $('input').change(function() {
//     var arr = [];
//     $('form').each(function(i) {
//         var max;
//         $(this).find('input:checked').each(function(i) {
//             var val = $(this).attr('class').match(/star-([0-9]+)/)[1];
//             if (val > max || !max) {
//                 max = val;
//             }
//         });
//         max && arr.push(max);
//     });
//
//     var sum = 0;
//
//     for(var i = 0;i < arr.length;i++){
//         sum += parseInt(arr[i],10);
//     }
//     var avg = sum/arr.length;
//
//     $('#average').text(avg);
//
// });