// grumenq function debounce-n vori parametrnern en func,wait,immedate
//func-en functiana vor@ uzumes kanches jamanak heto
//wait-jamanakahatvac vori jamanak functian verjin katarac gorcoxutyunic araj minchev "func"-@ katarel@
//immediate-bolian type-i true kam false __ true-ete talisenq nshanakuma vor 1angamic kanchumenq heto spasumenq vor wait-i jamanak@ lini eli krknvi, false-ete talisenq ancnuma wait-i jamnak@ vor fucntian katavuma,(voroshuma erb katarvi functian)
//es functiayi mej heto mihatel functia enq grum mej@ popoxakaner haytararelov var-i mijocov heto "later"-ic functia enq kanchum vori mej timeout-@ talisenq=null vor chlini heto if-enq ogtagorcum
//2rd masum sliderImages.forEach ogtagocumenq ES6-i karj greladzev@ "=>" hayatarumenq "const"-ov popoxakaner orinak "slideInAt=(Y-i aracqi ayqan pixel vorqan ijelem + mer patuhani laynq@) - height " ,
//"imageBottom = verevi masic heravorutyun + height " , "isHalfShown =slideInAt > verevi masic heravorutyun , isNotScrolledPast=Y-i aracqi ayqan pixel vorqan ijelem<imageBottom" heto if-enq eli ogtagroce "&&-nshanakuma ev aysinq 2 arjeqnerne petqa linen kam true kam false ete 2ne hamapatasxanumen anuma sliderImage.classList.add('active')-gorcoxutyun@ ete che ashxatuma else@ anuma sliderImage.classList.remove('active')-gorcoxutyun@'
function debounce(func, wait = 20, immediate = true) {
    var timeout;
      function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
    sliderImages.forEach(sliderImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));