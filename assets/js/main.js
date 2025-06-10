$(window).on("load", function () {
	AOS.init({
		offset: 60,
		duration: 900,
	});
	document.querySelectorAll("img").forEach((img) => img.addEventListener("load", () => AOS.refresh()));
});

var $status = $(".pagingInfo");
var $slickElement = $(".slideshow");

$slickElement.on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
	//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	var i = (currentSlide ? currentSlide : 0) + 1;
	$status.text(i + "/" + slick.slideCount);
});

$(window).scroll(function () {
	if ($(window).scrollTop() >= 330) {
		$("header").addClass("fixed");
	} else {
		$("header").removeClass("fixed");
	}
});

$(document).ready(function () {
	$("#click").on("click", function () {
		$("#click").text(function (i, t) {
			return t == "Hide" ? "Show More" : "Hide";
		});
		$("#element").toggle();
	});

	$(".toggle-btn").click(function () {
		$(this).find("i").toggleClass("fas fa-times");
		$(".toggle-menu-wrap").toggleClass("highlighted");
	});

	// $(window).click(function(){
	//   $(this).find('i').toggleClass('fas fa-times');
	//   $(".toggle-menu-wrap").toggleClass("highlighted");
	// });

	$(".insurance-slider").slick({
		slidesToShow: 4,
		infinite: false,
		dots: false,
		loop: false,
		margin: 10,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right"></i></button>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1008,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesPerView: 1,
					slidesToScroll: 1,
					slidesToShow: 1,
					centerMode: true,
					centerPadding: "0%",
				},
			},
		],
	});

	$(".HalfSlider").slick({
		slidesToShow: 1,
		infinite: true,
		dots: true,
		margin: 10,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		// dots: false, Boolean
		// arrows: false, Boolean
	});

	$slickElement.slick({
		autoplay: false,
		dots: true,
		margin: 0,
		centerMode: true,
		centerPadding: "0%",
		prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right"></i></button>',
	});

	new Swiper(".serviceSlider", {
		loop: false,
		nextButton: ".swiper-button-next",
		prevButton: ".swiper-button-prev",
		initialSlide: 2.8,
		grabCursor: true,
		centeredSlides: true,
		paginationClickable: true,
		spaceBetween: 70,
		breakpoints: {
			1920: {
				slidesPerView: 6,
				spaceBetween: 70,
			},
			1028: {
				slidesPerView: 4,
				spaceBetween: 70,
			},
			980: {
				slidesPerView: 1.5,
				loop: false,
				initialSlide: 2.8,
			},
			480: {
				slidesPerView: 1.2,
				loop: false,
				initialSlide: 6,
				spaceBetween: 15,
			},
		},
	});

	$(".DoctorSlider").slick({
		slidesToShow: 1.7,
		infinite: false,
		initialSlide: 1,
		dots: false,
		slidesToScroll: 1,
		autoplay: false,
		prevArrow: $(".docprev"),
		nextArrow: $(".docnext"),
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1.7,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1008,
				settings: {
					slidesToShow: 1.2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1.2,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".Appoloclinic").slick({
		slidesToShow: 1,
		infinite: false,
		initialSlide: 1,
		dots: false,
		spaceBetween: 30,
		slidesToScroll: 1,
		autoplay: false,
		prevArrow: '<button class="slide-doctor prev-arrow"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button class="slide-doctor next-arrow"><i class="fa fa-chevron-right"></i></button>',
		autoplaySpeed: 2000,
	});
});

//loading box
const CardImages = document.querySelectorAll(".coloring-card");
const SliderHome = document.querySelectorAll(".homeslide ");
const whoweareeLoad = document.querySelectorAll(".whoweare ");
const MainHeadingb = document.querySelectorAll(".main-heading ");
const servLoading = document.querySelectorAll(".servLoading ");
const btnLoad = document.querySelectorAll(".btn-load ");
const loadingHead = document.querySelectorAll(".loading-head ");
const btnSidebar = document.querySelectorAll(".btn-sidebar ");
const cardLoading = document.querySelectorAll(".card-loading ");
const cardsecltybox = document.querySelectorAll(".card-seclty-box ");
const btnLoading = document.querySelectorAll(".btn-loading ");
const doctorCard = document.querySelectorAll(".doctor-card");
const appoloslide = document.querySelectorAll(".appoloslide");
const spekboxPatient = document.querySelectorAll(".spekbox");
const breadcrumbWrap = document.querySelectorAll(".breadcrumb-wrap");
const loadingBox = document.querySelectorAll(".loading-box");

//for visible
const CardIconSub = document.querySelectorAll(".coloring-card .icon-colorcard  ");
const SliderBox = document.querySelectorAll(".homeslide .slider-section ");
const whoweareeBox = document.querySelectorAll(".whoweare .whoweareCard ");
const Mainheading = document.querySelectorAll(".main-heading .box");
const servLoadingCard = document.querySelectorAll(".servLoading .card");
const btnLoadi = document.querySelectorAll(".btn-load i");
const loadingHeada = document.querySelectorAll(".loading-head a");
const btnSidebarB = document.querySelectorAll(".btn-sidebar a");
const cardLoadingHalfslide = document.querySelectorAll(".card-loading .HalfSlider");
const cardSeclty = document.querySelectorAll(".card-seclty-box .card-seclty");
const btnLoadinga = document.querySelectorAll(".btn-loading a");
const doctorCardLoad = document.querySelectorAll(".doctor-card .doctor-load");
const appoloslideBox = document.querySelectorAll(".appoloslide .appoloslide-box");
const spekboxBox = document.querySelectorAll(".spekbox .row");
const breadcrumbrow = document.querySelectorAll(".breadcrumb-wrap .breadcrumb-row");
const hidingBox = document.querySelectorAll(".loading-box .hiding-box");

//animate manage
const renderCard = () => {
	//loading manage
	CardImages.forEach((cardImage) => {
		cardImage.classList.remove("loading");
	});

	SliderHome.forEach((slideh) => {
		slideh.classList.remove("loading");
	});

	whoweareeLoad.forEach((whowe) => {
		whowe.classList.remove("loading");
	});

	MainHeadingb.forEach((heading) => {
		heading.classList.remove("loading");
	});

	servLoading.forEach((servLoadingL) => {
		servLoadingL.classList.remove("loading");
	});
	btnLoad.forEach((btnLoadBox) => {
		btnLoadBox.classList.remove("loading");
	});
	loadingHead.forEach((loadingHeader) => {
		loadingHeader.classList.remove("loading");
	});

	btnSidebar.forEach((btnSidebarBox) => {
		btnSidebarBox.classList.remove("loading");
	});
	btnSidebar.forEach((btnSidebarBox) => {
		btnSidebarBox.classList.remove("bx-3");
	});

	cardLoading.forEach((cardLoadingSlide) => {
		cardLoadingSlide.classList.remove("loading");
	});

	cardsecltybox.forEach((cardsecltyboxGrid) => {
		cardsecltyboxGrid.classList.remove("loading");
	});

	btnLoading.forEach((btnLoadingLoad) => {
		btnLoadingLoad.classList.remove("loading");
	});

	doctorCard.forEach((doctorCardBox) => {
		doctorCardBox.classList.remove("loading");
	});

	appoloslide.forEach((appoloslideBox) => {
		appoloslideBox.classList.remove("loading");
	});

	spekboxPatient.forEach((spekboxPatientBox) => {
		spekboxPatientBox.classList.remove("loading");
	});

	breadcrumbWrap.forEach((breadcrumbWrapBox) => {
		breadcrumbWrapBox.classList.remove("loading");
	});

	loadingBox.forEach((loadingBoxL) => {
		loadingBoxL.classList.remove("loading");
	});

	//visible part
	CardIconSub.forEach((cardicon) => {
		cardicon.style.visibility = "visible";
	});

	SliderBox.forEach((slidehomes) => {
		slidehomes.style.visibility = "visible";
	});

	whoweareeBox.forEach((whoweareeBoxv) => {
		whoweareeBoxv.style.visibility = "visible";
	});

	Mainheading.forEach((mainHead) => {
		mainHead.style.visibility = "visible";
	});

	servLoadingCard.forEach((servLoadingCardL) => {
		servLoadingCardL.style.visibility = "visible";
	});
	btnLoadi.forEach((btnLoadicon) => {
		btnLoadicon.style.visibility = "visible";
	});
	loadingHeada.forEach((loadingHeadai) => {
		loadingHeadai.style.visibility = "visible";
	});
	btnSidebarB.forEach((btnSidebarBox) => {
		btnSidebarBox.style.visibility = "visible";
	});

	cardLoadingHalfslide.forEach((cardLoadingHalfslideBox) => {
		cardLoadingHalfslideBox.style.visibility = "visible";
	});

	cardSeclty.forEach((cardSecltyBoxs) => {
		cardSecltyBoxs.style.visibility = "visible";
	});

	btnLoadinga.forEach((btnLoadingaatag) => {
		btnLoadingaatag.style.visibility = "visible";
	});

	doctorCardLoad.forEach((doctorCardLoadBox) => {
		doctorCardLoadBox.style.visibility = "visible";
	});

	appoloslideBox.forEach((appoloslideBoxBox) => {
		appoloslideBoxBox.style.visibility = "visible";
	});

	spekboxBox.forEach((spekboxBoxBox) => {
		spekboxBoxBox.style.visibility = "visible";
	});

	breadcrumbrow.forEach((breadcrumbrowbox) => {
		breadcrumbrowbox.style.visibility = "visible";
	});

	hidingBox.forEach((hidingBoxL) => {
		hidingBoxL.style.visibility = "visible";
	});
};

setTimeout(() => {
	renderCard();
}, 2000);

//scrolling text

function configureDropDownLists(ddl1, ddl2) {
	var Dubai = ["Al Karama", "MoreToCome"];
	var MoreToCome = ["More To Come"];

	switch (ddl1.value) {
		case "Dubai":
			ddl2.options.length = 0;
			for (i = 0; i < Dubai.length; i++) {
				createOption(ddl2, Dubai[i], Dubai[i]);
			}
			break;
		case "MoreToCome":
			ddl2.options.length = 0;
			for (i = 0; i < MoreToCome.length; i++) {
				createOption(ddl2, MoreToCome[i], MoreToCome[i]);
			}
			break;
	}
}

function createOption(ddl, text, value) {
	var opt = document.createElement("option");
	opt.value = value;
	opt.text = text;
	ddl.options.add(opt);
}

//play/pause on double click on the video
$("video").on("click", function (e) {
	if (this.paused) {
		this.play();
	} else {
		this.pause();
	}
});

//play/pause of the video when the modal opens/closes.
$(".videomodal").on("show.bs.videomodal", function () {
	//show modal event for an element which has class 'modal'
	var id = $(this).attr("id"); //saves in the var the ID value of the opened modal
	var video = document.getElementById(id).querySelectorAll("video"); //Find the element 'video' inside of the modal defined by the ID previosly saved

	$(video)[0].play(); //plays what we saved on 'video' variable
});

$(".videomodal").on("hidden.bs.modal", function () {
	//show modal event for an element which has class 'modal'
	var id = $(this).attr("id"); //saves in the var the ID value of the closed modal
	var video = document.getElementById(id).querySelectorAll("video"); //Find the element 'video' inside of the modal defined by the ID previosly saved

	$(video)[0].pause(); //pauses the video
	$(video)[0].currentTime = 0; //rests the video to 0 for have it from the beging when the user opens the modal again
});
