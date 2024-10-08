;(function (Wishlist, $) {

  var $wishlistButton = $('.wishlist-btn');
  var $wishlistTile = $('.wishlist-tile-container');
  var numProductTiles = $wishlistTile.length;
  var wishlist = localStorage.getItem('user_wishlist') || [];
 
  if (wishlist.length > 0) {
 
    wishlist = JSON.parse(localStorage.getItem('user_wishlist'));
  }

  /*
   * Update button to show current state (gold for active)
   */   
  var animateWishlist = function (self) {
    $(self).toggleClass('is-active');
    $('.wishlistview').toggleClass('is-active');
    if ($( ".action--wishlist" ).hasClass( "is-active" )){
   $(".action--wishlist span").html('<img class="btn--main" src="//sotoimports.com/cdn/shop/t/4/assets/icn-wishlist-added.svg?v=37492033072676081861711054908" alt="">  Added to Wishlist');
    }
    else{
    $(".action--wishlist span").html('<img class="btn--main" src="//cdn.shopify.com/s/files/1/2623/6172/t/2/assets/icn-wishlist.svg?3444360808459993158" alt="">  Add to Wishlist');
    }
    };

  /*
   * Add/Remove selected item to the user's wishlist array in localStorage
   * Wishlist button class 'is-active' determines whether or not to add or remove
   * If 'is-active', remove the item, otherwise add it
   */   
  var updateWishlist = function (self) {
    var productHandle = $(self).attr('data-product-handle');
    var isRemove = $(self).hasClass('is-active');
    
    /* Remove */
    if (isRemove) {
      var removeIndex = wishlist.indexOf(productHandle);
      wishlist.splice(removeIndex, 1);
      localStorage.setItem('user_wishlist', JSON.stringify(wishlist));
         
      
    }
    /* Add */ 
    else {
      wishlist.push(productHandle);
      localStorage.setItem('user_wishlist', JSON.stringify(wishlist));
      
      
    }
    console.log(JSON.stringify(wishlist));
  };

  /*
   * Loop through wishlist buttons and activate any items that are already in user's wishlist
   * Activate by adding class 'is-active'
   * Run on initialization
   */   
  var activateItemsInWishlist = function () {
    $wishlistButton.each(function () {
      var productHandle = $(this).attr('data-product-handle');
      if (wishlist.indexOf(productHandle) > -1) {
        $(this).addClass('is-active');
        $(".action--wishlist span").html('<img class="btn--main" src="//sotoimports.com/cdn/shop/t/4/assets/icn-wishlist-added.svg?v=37492033072676081861711054908" alt=""> Added to Wishlist');
      }
    });
  };

  /*
   * Loop through product titles and remove any that aren't a part of the wishlist
   * Decrement numProductTiles on removal
   */   
  var displayOnlyWishlistItems = function () {
    $wishlistTile.each(function () {
      var productHandle = $(this).attr('data-product-handle');
      if (wishlist.indexOf(productHandle) === -1) {
        $(this).remove();
        numProductTiles--;
      }
    });
  };

  /*
   * Check if on the wishlist page and hide any items that aren't a part of the wishlist
   * If no wishlist items exist, show the empty wishlist notice
   */   
  var loadWishlist = function () {
    if (window.location.href.indexOf('pages/wishlist') > -1) {
      displayOnlyWishlistItems();
      $('.wishlist-loader').fadeOut(2000, function () {
        $('.wishlist-grid').addClass('is_visible');
        $('.wishlist-hero').addClass('is_visible');
        if (numProductTiles == 0) {
          $('.wishlist-grid--empty-list').addClass('is_visible');
        } else {
          $('.wishlist-grid--empty-list').hide();
        }
      });
    }
  };

  var bindUIActions = function () {
    $wishlistButton.click(function (e) {
      e.preventDefault();
      updateWishlist(this);
      animateWishlist(this);
    });
  };

  Wishlist.init = function () {
    bindUIActions();
    activateItemsInWishlist();
    loadWishlist();
  };

}(window.Wishlist = window.Wishlist || {}, jQuery, undefined));
