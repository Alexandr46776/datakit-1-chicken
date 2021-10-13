// // Import jQuery module (npm i jquery)
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)
window.UIkit = UIkit

import $ from 'jquery'
window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {
  $('#navToggle').click(function () {
    $(this).toggleClass('active')
    //открытие
    $('.overlay').toggleClass('open')
    // блокирует скролл
    $('body').toggleClass('locked')
  })
  $('.overlay').click(function () {
    $(this).removeClass('open')
    $('body').removeClass('locked')
    $('.navBurger ').removeClass('active')
  })

  function checkCookies() {
    let cookieDate = localStorage.getItem('cookieDate')
    let cookieNotification = document.getElementById('cookie_notification')
    let cookieBtn = cookieNotification.querySelector('.cookie_accept')

    // Если записи про кукисы нет или она просрочена, то показываем информацию про кукисы
    if (!cookieDate || +cookieDate + 1 < Date.now()) {
      cookieNotification.classList.add('show')
    }

    // При клике на кнопку, в локальное хранилище записывается текущая дата в системе UNIX
    cookieBtn.addEventListener('click', function () {
      localStorage.setItem('cookieDate', Date.now())
      cookieNotification.classList.remove('show')
    })
  }
  checkCookies()
})
  // для закрытия меню при клике, которое находится в хедере и вызывается при клике на меню
$(document).click( function(event){
  if( $(event.target).closest(".btn-1").length ) return;
  $(".m_menu .btn-1 ").hide();
  event.stopPropagation();
});
(function() {
	var module = angular.module("app", [
    "ngMaterial",
    "ngAnimate",
    "ngAria",
    "ngMessages",
    "mdPickers"
  ]); 
  
  module.controller("MainCtrl", ['$scope',  '$mdpTimePicker', function($scope,  $mdpTimePicker){
    $scope.currentDate = new Date();
  	
   
    
    this.showTimePicker = function(ev) 
    {
    	$mdpTimePicker($scope.currentTime, {
        targetEvent: ev
      }).then(function(selectedDate) {
        $scope.currentTime = selectedDate;
      });;
    }  
  }]);
})();