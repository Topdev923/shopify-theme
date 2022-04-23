var bundleProductDisplayAction = {
    productState: {
        available: true,
        soldOut: '',
        onSale: '',
        showUnitPrice: '',
        productId: '',
        product_handle: '',
    },

    _hideErrorMessage: function() {
    
    },

    _setProductState: function(evt) {
        var variant = evt.detail.variant;
        this.productState.productId = evt.detail.product.id;
        this.productState.product_handle = evt.detail.product.handle;        
        if (!variant) {
            this.productState.available = false;
            return;
        }

        this.productState.available = true;
        this.productState.soldOut = !variant.available;
        this.productState.onSale = variant.compare_at_price > variant.price;
        this.productState.showUnitPrice = !!variant.unit_price; 

    }, 
    
    _updateStoreAvailabilityContent: function(evt) {

    },
    
    _updateAddToCart: function(evt) {

        if (!this.productState.available) {
          this._disableAddToCart(DT_THEME.strings.unavailable);

          jQuery('#bundle_chk_'+this.productState.productId).prop('checked', false); 
          this._updatePriceValueHidden(evt);
          return;
        }
        if (this.productState.soldOut) {
          this._disableAddToCart(DT_THEME.strings.soldOut);
          jQuery('#bundle_chk_'+this.productState.productId).prop('checked', false); 
          this._updatePriceValueHidden(evt);
          return;
        }

        this._enableAddToCart(DT_THEME.strings.addToCart);
        jQuery('#bundle_chk_'+this.productState.productId).prop('checked', true); 
        this._updatePriceValueHidden(evt);
       
    },

    _updatePriceValueHidden: function(evt) {
        var variant = evt.detail.variant;
        if (!variant) {
          var varientPrice = '';
          var varientId = '';
        } else {
          var varientPrice =  variant.price;
          var varientId = variant.id;
        }

        jQuery('#bundle_product_price_' + this.productState.productId).val(varientPrice);
        jQuery('#bundle_product_price_' + this.productState.productId).attr('data-varient-id', varientId);

        jQuery('#bundle_chk_' + this.productState.productId).focus();

        computeTotalDiscount();

    },

    _disableAddToCart: function(text) {
        jQuery(".dt_AddToCart").html(text);
        jQuery('.dt_AddToCart').prop('disabled', true);
    },

    _enableAddToCart: function(text) {
        jQuery('.dt_AddToCart').prop('disabled', false);
        jQuery(".dt_AddToCart").html(text);
    },

    _updateLiveRegion: function(item) {

    },      

    _updatePriceComponentStyles: function(evt) {

    },


    _updateAvailability: function(evt) {

        // remove error message if one is showing
        bundleProductDisplayAction._hideErrorMessage();

        // set product state
        bundleProductDisplayAction._setProductState(evt);

        // update store availabilities info
        bundleProductDisplayAction._updateStoreAvailabilityContent(evt);
        // update form submit
        bundleProductDisplayAction._updateAddToCart(evt);
        // update live region
        bundleProductDisplayAction._updateLiveRegion(evt);

        bundleProductDisplayAction._updatePriceComponentStyles(evt);

    },


    _updateMedia: function(evt) {
        var variant = evt.detail.variant;
        var mediaId = variant.featured_media.id;
        var sectionMediaId = 'product-thumb-media' + '-' + mediaId;
        var sectionProductThumbMediaId = sectionMediaId;

        var sectionProductGalleryTop = 'product-gallery-media' + '-' + mediaId;

        bundleProductDisplayAction._switchMedia(sectionProductGalleryTop);
        bundleProductDisplayAction._setActiveThumbnail(sectionMediaId);
        
    },

    _switchMedia: function(sectionMediaId) {

    },
    
    _setActiveThumbnail: function(sectionMediaId) {


    },

    _updatePrice: function(evt) {
        var variant = evt.detail.variant;
        var productId = evt.detail.product.id;

        if (document.querySelector("#sale-price-" + productId)) {
            document.querySelector("#sale-price-" + productId).innerHTML = theme.Currency.formatMoney(variant.price, theme.moneyFormat);
        }
        if (document.querySelector("#old-price-" + productId)) {
            document.querySelector("#old-price-" + productId).innerHTML = theme.Currency.formatMoney(variant.compare_at_price, theme.moneyFormat);
        }
    },

    _updateSKU: function(evt) {

        var variant = evt.detail.variant;

        // Update the sku
        var sku = document.querySelector(".dT_ProductSkuText");
        if (!sku) return;
        sku.innerHTML = variant.sku;
    }

};





var computeTotalDiscount = function() {

    var a_price = [];
    var disCountPercentage = DT_DISCOUNT;
    var isAllBundleProductChecked = true;
    var totalProductItem = 0;

    bundleProductIds.forEach(element => {
      var productId = element;
      
      if (jQuery('#bundle_chk_' + productId).is(":checked")) {
          var productPrice = jQuery("#bundle_product_price_" + productId).val();

          if (productPrice != '') {
            productPrice = (productPrice * 1) ;
            a_price.push( productPrice );
          }else {
            isAllBundleProductChecked = false;
          }

      } else {
         isAllBundleProductChecked = false;
      }
      
      var totalProducPrice = a_price.reduce((a, b) => a + b, 0);

      if (isAllBundleProductChecked == false) {
        jQuery(".dT_totalBundleOriginalPrice").hide();
      } else {
            jQuery(".dT_totalBundleOriginalPrice").html(
              theme.Currency.formatMoney(totalProducPrice, theme.moneyFormat)
            );

            jQuery(".dT_totalBundleOriginalPrice").show();
      }

      if (isAllBundleProductChecked == true) {
            disCountPercentage = parseInt(disCountPercentage);
            totalProducPrice = totalProducPrice - (totalProducPrice * (disCountPercentage / 100));
      }

      jQuery(".dT_totalBundleSalePrice").html(
            theme.Currency.formatMoney(totalProducPrice, theme.moneyFormat)
      );

    });

};



class doBundleProductSwatch {
    constructor(container, productJsonId, originalProductSelectorId, singleOptionSelector) {
        this.eventHandlers = {};


        var productTemp = $("#" + productJsonId).html();  
        var product = JSON.parse(productTemp);

        this.container = container;

        this.productId = product.id;

        var productJson = product;


        this.variants = new dT_slate.Variants({
            'container' : container,
            'product': productJson,
            'originalSelectorId': originalProductSelectorId,
            'enableHistoryState': false,
            'singleOptionSelector': '.single-option-selector'
        });
        


        this.eventHandlers.updateAvailability = bundleProductDisplayAction._updateAvailability.bind(this);

        this.eventHandlers.updateMedia = bundleProductDisplayAction._updateMedia.bind(this);
        this.eventHandlers.updatePrice = bundleProductDisplayAction._updatePrice.bind(this);
        this.eventHandlers.updateSKU = bundleProductDisplayAction._updateSKU.bind(this);

        this.container.addEventListener(
            'variantChange',
            this.eventHandlers.updateAvailability
        );
        this.container.addEventListener(
            'variantImageChange',
            this.eventHandlers.updateMedia
        );
        this.container.addEventListener(
            'variantPriceChange',
            this.eventHandlers.updatePrice
        );
        this.container.addEventListener(
            'variantSKUChange',
            this.eventHandlers.updateSKU
        );    
    }    
}




!(function($) {
    "use strict";
  
    var hideAllVairentOptions = function() {
      if (jQuery(".dT_varientBWrap").is(':visible') ) {
         jQuery(".dT_varientBWrap").slideUp();
      }
      
    }
    
    //-- closest bundle click
    $(document).on('click', function (e) {
        if ($(e.target).closest(".dT_bundleSelector").length === 0) {
            hideAllVairentOptions();
        }
	});
  
    if (document.querySelector(".dT_bundleOptions")) {
//         $('.dT_bundleOptions').select2({
//           minimumResultsForSearch: Infinity,
//           theme: "classic"
//         });  
      
      
//         $('.dT_bundleOptions').on('select2:select', function (e) {

          
//         });
    }
    
  

    
    if (document.querySelector(".dT_bundleSelector")) {
        //-- toggle choose options
        $(document).on("click", ".dT_bundleProductToggle", function (event) {
            event.preventDefault();
            var self = jQuery(this);
            var bundleProductHandle = self.attr("data-bundle-product-handle");
            var bundleProductId = self.attr("data-bundle-product-id");
          
            hideAllVairentOptions();
          
            if (jQuery(".dT_varientOptions_" + bundleProductId).is(':visible') ) {

                jQuery(".dT_varientOptions_" + bundleProductId).slideUp();
              
            } else {
                jQuery(".dT_varientOptions_" + bundleProductId).slideDown();
            }

        });


        //-- bundle check listiner
        $(document).on("change", ".dT_bundleCheck", function (event) {
            event.preventDefault();
            var self = jQuery(this);
            var bundleProductHandle = self.attr("data-product-handle");
            var bundleProductId = self.attr("data-product-id");

            computeTotalDiscount();

        });




    bundleProductIds.forEach(element => {
      var productId = element;

      new doBundleProductSwatch
      (
          document.getElementById('dT_bundle-product-' + productId), 
          'dT_BundleProductJson-' + productId, 
          '#bundle_productSelect_' + productId, 
          ".single-option-selector"
      );      

    });

     computeTotalDiscount();

  }
  
})(jQuery);
