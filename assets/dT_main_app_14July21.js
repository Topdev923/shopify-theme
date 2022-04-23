/**
 * 01) collection
 */
var scrollToCollectionTop = function() {
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
};

var collectionFilterPostInit = function() {

    //-- need first for now
	doCollectionWishListPersistent();

	//-- is for Collection filter Section
	var sectionId = "collection-template";

	//-- is there in dt-theme.js.liquid
	dt_initQuickShop(sectionId);
	dt_activateQuickShop();

	scrollToCollectionTop();
  
  	loadSPRXHR();
};

var loadSPRXHR = function loadSPRXHR() {
	if (document.querySelector(".spr-badge")) {
		SPR.registerCallbacks();
		SPR.initRatingHandler();
		SPR.initDomEls();
		SPR.loadProducts();
		SPR.loadBadges();
	}
};

var showHideClearFilter = function() {
	var constraint = dTCollectionFilter.getConstraint();

	if (constraint.length > 0) {
		$(".dT_ClearAll").css("display", "block");
	} else {
		$(".dT_ClearAll").css("display", "none");
	}
};

var resetGrid = function() {

};


/**
 * 
 * 02) wish list Persistent All
 * 
 */

var doProductGridWishListPersistent = function(class_element) {
	var dTCompareListOther = dTCompareList; //Object.assign( {}, dTWhistList );
	window.dTCompareListOther = dTCompareListOther;
	dTCompareListOther.setListLocalStorageKey('dt-product-compare-list', ",");

	new Vue({
		el: class_element,
		delimiters: ['${', '}'],
		data: {},
		computed: {},
		methods: {
			isInWishList: function(handle) {
				//console.log("wishilist---"+ handle + '---' + dTWhistList.isAddedIntoList(handle));

				return dTWhistList.isAddedIntoList(handle);
			},

			isInCompareList: function(handle) {
				//console.log("compareList---"+ handle + '---' + dTCompareListOther.isAddedIntoList(handle));

				return dTCompareListOther.isAddedIntoList(handle);
			},

			compareItemCount: function() {
				var items = dTCompareListOther.getWishlist();

				return items.length;
			}
		}
	});
};

var doCollectionWishListPersistent = function() {
    doProductGridWishListPersistent('.dT_VProdWrapper');
};

var doCollectionWishListPersistentOther = function() {
    doProductGridWishListPersistent('.dT_VProdWrapperOther');
};

var doProductSingleWishListPersistent = function() {
    doProductGridWishListPersistent('.dT_VProdWishList');
};


var setWishListCount = function() {
    if (document.querySelector('.dt-wishlist-cnt')) {
        var items = dTWhistList.getWishlist();
        var cnt = items.length;

		if (cnt > 0 ) {
			document.querySelector('.dt-wishlist-cnt').innerHTML = cnt;
			document.querySelector('.dt-wishlist-cnt').style.display = 'block';
		} else {
			document.querySelector('.dt-wishlist-cnt').innerHTML = 0;
			document.querySelector('.dt-wishlist-cnt').style.display = 'none';
		}
    }
};


/**
 * 03) Add to Cart
 * 
 */
const dT_AddToCart = function(frm) {
	dTGeneral.loadingAxiosAddToCartCreation();

	axios.post('/cart/add.js', frm)
		.then((response) => {
			window.dTGeneral.closeMiniCart();
			window.dTGeneral.showMiniCart();
		})
		.catch((error) => {});
};

const dT_QuickAddToCart = function(frm) {
	dTGeneral.loadingAxiosAddToCartCreation();

    axios.post('/cart/add.js', frm)
		.then((response) => {
			$.magnificPopup.close();
			window.dTGeneral.showMiniCart();
		})
		.catch((error) => {});
};

const dT_AddToCartOther = function(frm) {
	dTGeneral.loadingAxiosAddToCartCreation();
	axios.post('/cart/add.js', frm)
		.then((response) => {
			Shopify.moveAlong();
		})
		.catch((error) => {});
};


/**
 * 04) wishList and compare pre/post loading
 * 
 */
const setWhishListLoaingClass = function(el) {
    el.removeClass('dT-icon-add-wlist-loaded');
    el.addClass('dT-icon-add-wlist-loading');
};

const setWhishListLoadedClass = function(el) {
    setTimeout(function() {
        el.removeClass('dT-icon-add-wlist-loading');
        el.addClass('dT-icon-add-wlist-loaded');
    }, 3000);

    //-- set wish list after loaded page
    el.attr("href", "/pages/wishlist");
    el.removeClass("dT_WhishListAddBtn");

    var viewMyWishList = (DT_THEME.strings.viewMyWishList == '') ? DT_THEME.strings.viewMyWishList : 'View My WishList';
    el.find('span').html(viewMyWishList);
};

const specialReloadWhishListGrid = function() {

};


const setCompareListLoaingClass = function(el) {
    el.removeClass('dT-icon-add-compare-loaded');
    el.addClass('dT-icon-add-compare-loading');
};

const setCompareListLoadedClass = function(el) {
    setTimeout(function() {
        el.removeClass('dT-icon-add-compare-loading');
        el.addClass('dT-icon-add-compare-loaded');
    }, 3000);

    //-- set wish list after loaded page
    el.attr("href", "/pages/compare");
    el.removeClass("dT_compareListAddBtn");
};


/**
 * wishlist and compare list grid
 */
var dT_WishListGrid; 
var whishListReload = function() {
	dT_WishListGrid.getList();
	dT_WishListGrid.isEmpty();
};

function getWishList() {
    dT_WishListGrid = new Vue({
        el: "#dT_WishListGrid",
        delimiters: ['${', '}'],
        data: {
            wishListRecords: [],
            isNoRecords: false,
            wishListRecordsTemplate: [{
                id: '',
                product_title: '',
                product_handle: '',
                product_image: '',
                vendor: '',
                type: '',
                money_price: '',
                price_min: '',
                price_max: '',
                available: '',
                price_varies: '',
                variant_id: '',
                variant_title: '',
                sku: '',
                quantity: "1",
                product_url: ''
            }]

        },
        computed: {
            // a computed getter
            wishList: function() {
                var Records = dTWhistList.getWishListRecords();

                this.wishListRecords = Records;
                return this.wishListRecords;
            },

            isEmpty: function() {

                return false;
            }
        },
        mounted: function() {
            this.getList();
            this.isEmpty();
        },
        methods: {
            getList: function() {
                var Records = dTWhistList.getWishListRecords();

                this.wishListRecords = Records;
                return this.wishListRecords;
            },
            isEmpty: function() {
                if (this.wishListRecords.length > 0) {
                    if (typeof this.wishListRecords === 'object') {
                        if (this.wishListRecords[0].id == '') {
                            this.isNoRecords = true;
                        } else {
                            this.isNoRecords = false;
                        }
                    }
                    return this.isNoRecords;
                } else {
                    this.isNoRecords = true;
                    return this.isNoRecords;
                }
            },
            remove: function(productHandle) {
                console.log('remove from wish list ' + productHandle);
                try {

                    var p2  = Promise.resolve(1);
                    // var p2 = new Promise(function(resolve, reject) {
                    //     resolve(1);
                    // });

                    p2.then(function(value) {
                        dTGeneral.openWhishListRemovePreload();
						dTWhistList.removeWhishlist(productHandle);

                        return value + 1;
                    }).then(function(value) {
						setTimeout(function(){ 
							var items = dTWhistList.getWishlist();
							var cnt = items.length;
							console.log("wish list count " + cnt);

							if (cnt <= 0 ) {
								window.location.reload();
							}
							
							whishListReload();
							dTGeneral.closeWhishListRemovegPreload();

							$('#row_' + productHandle).remove();
							setWishListCount();
							return value + 1;
						}, 5000);
                    }).then(function(value) {

                        return value + 1;
                    }).then(function(value) {
                        return value + 1;
                    });

                } catch (err) {} finally {

                }
            }
        }
    });



}

function getCompareList() {

    var dT_CompareListGrid = new Vue({
        el: "#dT_CompareListGrid",
        delimiters: ['${', '}'],
        data: {
            compareListRecords: [],
            isNoRecords: false,
            wishListRecordsTemplate: [{
                id: '',
                product_title: '',
                product_handle: '',
                product_image: '',
                vendor: '',
                type: '',
                money_price: '',
                price_min: '',
                price_max: '',
                available: '',
                price_varies: '',
                variant_id: '',
                variant_title: '',
                sku: '',
                quantity: "1",
                product_url: ''
            }]
        },
        computed: {
            createContact: function() {},
            resetForm: function() {}
        },
        mounted: function() {
            this.getList();
            this.isEmpty();
        },
        methods: {
            getList: function() {
                var Records = dTCompareList.getCompareListRecords();
                this.compareListRecords = Records;
                return this.compareListRecords;
            },
            isEmpty: function() {
                if (this.compareListRecords.length > 0) {
                    if (typeof this.compareListRecords === 'object') {
                        if (this.compareListRecords[0].id == '') {
                            this.isNoRecords = true;
                        } else {
                            this.isNoRecords = false;
                        }
                    }
                    return this.isNoRecords;
                } else {
                    this.isNoRecords = true;
                    return this.isNoRecords;
                }
            },
            remove: function(productHandle) {


                try {
                    var p2 = new Promise(function(resolve, reject) {
                        resolve(1);
                    });

                    p2.then(function(value) {
                        dTGeneral.openCompareListRemovePreload();

                        return value + 1;
                    }).then(function(value) {
                        dTCompareList.removeWhishlist(productHandle);
                        dTCompareList.setupGrid('', 'compareList');

                        return value + 1;
                    }).then(function(value) {
                        dTGeneral.closeCompareListRemovegPreload();

                        return value + 1;
                    }).then(function(value) {
                        $('.record-' + productHandle).remove();
                        compareListReload();

                        return value + 1;
                    });


                } catch (err) {} finally {
                    // $('.record-'+productHandle).remove();
                    // dTCompareList.setupGrid('', 'compareList');

                }


            }
        }
    });



    var compareListReload = function() {
        dT_CompareListGrid.getList();
        dT_CompareListGrid.isEmpty();
    };

}


const dTUpStream = function() {

};

/**
 * 05) recommendated product
 */
const recomendatedProductPostInit = function() {

    doProductGridWishListPersistent('.dT_VProdRecommendations');

    //-- is for Collection filter Section
    var sectionId = "collection-template";

    //-- is there in dt-theme.js.liquid
    dt_initQuickShop(sectionId);
    dt_activateQuickShop();

    scrollToCollectionTop();
};

const loadProductRecommendationsIntoSection = function() {
    var productRecommendationsSection = document.querySelector(".product-recommendations");
    if (productRecommendationsSection === null) {
        return;
    }
    var productId = productRecommendationsSection.dataset.productId;
    var limit = productRecommendationsSection.dataset.limit;
    var requestUrl = "/recommendations/products?section_id=product-recommendations&limit=" + limit + "&product_id=" + productId;

    //-- @todo need to convert with axios request
    var request = new XMLHttpRequest();
    request.open("GET", requestUrl);
    request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
            var container = document.createElement("div");
            container.innerHTML = request.response;
            productRecommendationsSection.parentElement.innerHTML = container.querySelector(".product-recommendations").innerHTML;

            recomendatedProductPostInit();

        }
    };
    request.send();
};
document.addEventListener("shopify:section:load", function(event) {
    if (event.detail.sectionId === "product-recommendations") {
        loadProductRecommendationsIntoSection();
    }
});

!(function($) {
	"use strict";

    /**
     * 01) wish list
     */
	$(document).on("click", ".dT_WhishListAddBtn", function(event) {
		event.preventDefault();
		var self = jQuery(this);
		var productHandle = self.attr("data-product_handle");

        var addToWishList  = Promise.resolve('addToWishList');
        
        addToWishList.then(function(value){
			dTGeneral.openWhishListAddingPreload();
			setWhishListLoaingClass(self);
            return 'addToWishList';
        }).then(function(value) { 
            dTWhistList.updateWishlist(productHandle);
            return 'addToWishList';
        }).then(function(value) {     
			dTGeneral.closeWhishListAddingPreload();
			setWhishListLoadedClass(self);
			setWishListCount();
        }).catch(function(){
        });        
	});

	if (document.querySelector(".dT_WishListGrid")) {
		//-- set wish list records
        var gridWishList  = Promise.resolve('gridWishList');
        gridWishList.then(function(value){
			dTGeneral.openCompareListRemovePreload();
            dTWhistList.setupGrid('', "wishList");
            return 'gridWishList';
        }).then(function(value) { 
			setTimeout(function(){ 
				getWishList();
				whishListReload();
				dTGeneral.closeCompareListRemovegPreload();
				return 'gridWishList';

			}, 3000);

        }).then(function(value) {   
        }).catch(function(err){
			console.log('dT_WishListGrid error' + err);
        });        

		//dTWhistList.setupGrid(getWishList, "wishList");
	}

	$(document).on("click", ".dT_RemoveWhishList", function(event) {
		event.preventDefault();
		var self = jQuery(this);
		var productHandle = self.attr("data-product_handle");

		//$('#row_'+productHandle).remove();
		$(this).closest("tr").remove();

		Promise.all([
			dTGeneral.openWhishListRemovePreload(),
			dTWhistList.removeWhishlist(productHandle),
			dTGeneral.closeWhishListRemovegPreload(),
			specialReloadWhishListGrid()
		]).then(values => {});
	});


	if (document.querySelector(".dT_VProdWishList")) {
		doProductSingleWishListPersistent();
	}

	var a_vueProductGrid = ['.dT_VProdWrapper', '.dT_VProdWrapperOther', '.dT_VProdWrapperHot', '.dT_VRelatedProducts', '.dT_VProdRecommendations'];
	a_vueProductGrid.forEach(function(element, index) {
		if (document.querySelector(element)) {
			doProductGridWishListPersistent(element);
		}
	});

    if (document.querySelector(".dT_vProdWrap")) {
		$(".dT_vProdWrap").each(function(i, el) {

			var className = el.className;
			var a_className = className.split(' ').map(string => string.trim());
            
            var a_class = [];
            a_className.forEach(function(item, index){
                  if(item.trim() != '') {
                    a_class.push(item.trim());  
                  }  
            });
			
            var className = "." + a_class.join('.');
            var className = className.trim();
			doProductGridWishListPersistent(className);
		});
	}

    /**
     * 02 RecommendationsIntoSection
     */
	loadProductRecommendationsIntoSection();

	/**
	 * 03 compare
	 */
	dTCompareList.setListLocalStorageKey('dt-product-compare-list', ",");

	$(document).on("click", ".dT_compareListAddBtn", function(event) {
		event.preventDefault();
		var self = jQuery(this);
		var productHandle = self.attr("data-product_handle");

		var items = dTCompareList.getWishlist();

		if (items.length == 4) {
			alert(DT_THEME.strings.minCompareProduct);
		} else {
			Promise.all([
				dTGeneral.openCompareListAddingPreload(),
				setCompareListLoaingClass(self),
				dTCompareList.updateWishlist(productHandle),
				dTGeneral.closeCompareListRemovegPreload(),
				setCompareListLoadedClass(self)
			]).then(values => {

			});
		}
	});

	$(document).on("click", ".dT_compareListLink", function(event) {
		event.preventDefault();
		var self = jQuery(this);
		var productHandle = self.attr("data-product_handle");
		var compareUrl = self.attr("href");

		var items = dTCompareList.getWishlist();

		if (items.length <= 1) {
			alert(DT_THEME.strings.minCompareProductNav);
		} else {
			window.location.href = compareUrl;
		}
	});


	if (document.querySelector(".dT_CompareListGrid")) {
		//-- set wish list records
		dTCompareList.setupGrid(getCompareList, 'compareList');
	}


	$(document).on("click", ".dT_RemoveCompareList", function(event) {
		event.preventDefault();
		var self = jQuery(this);
		var productHandle = self.attr("data-product_handle");

		$('.record-' + productHandle).remove();

		Promise.all([
			dTGeneral.openCompareListRemovePreload(),
			dTCompareList.removeWhishlist(productHandle),
			dTGeneral.closeCompareListRemovegPreload(),
			getCompareList()
		]).then(values => {});
	});

    /**
     * 04 side bar
     */
	$(document).on("click", ".dT_CollectionFilter", function(event) {
		event.preventDefault();
		var self = jQuery(this);
		var constraintValue = self.attr("data-value");

		if (self.hasClass("active")) {
			self.removeClass('active');
		} else {
			self.addClass('active');
		}

		//-- update search filter Constraint
		dTCollectionFilter.updateConstraint(constraintValue);

		//-- load collection grid
		dTCollectionFilter.updateCollectionGrid();

		showHideClearFilter();

	});

	//-- side bar clear filter
	$(document).on("click", ".dT_ClearAll", function(event) {
		event.preventDefault();
		var self = jQuery(this);

		// reset filter
		dTCollectionFilter.resetConstraint();

		// clear Filter selection
		$(".dT_CollectionFilter").removeClass('active');

		//-- load collection grid
		dTCollectionFilter.updateCollectionGrid();

		showHideClearFilter();

	});


	//-- collection pagination
	$(document).on("click", ".dT_Pagination", function(event) {
		event.preventDefault();
		var self = jQuery(this);

		var paginationURL = self.attr("href");
		paginationURL = paginationURL.split("?");

		if (paginationURL[1] != '') {
			paginationURL = "?" + paginationURL[1];
		}

		var a_params = {};
		var urlParams = new URLSearchParams(paginationURL);

		if (urlParams) {
			for (const [key, value] of urlParams) {
				console.log(`${key}:${value}`);
				a_params[`${key}`] = `${value}`;
			}
		}

		/*
		var pageNo = dTGeneral.getURLParams(paginationURL, 'page');
		var a_params = {};
		if (pageNo != '') {
			a_params['page'] = pageNo;
		}
		*/

		//-- load collection grid
		dTCollectionFilter.updateCollectionGrid(a_params);

		showHideClearFilter();
	});


	//-- collection pagination
	$(document).on("change", ".dT_SortBy", function(event) {
		event.preventDefault();
		var self = jQuery(this);

		var a_params = {};
		a_params['sort_by'] = this.value;

		//-- load collection grid
		dTCollectionFilter.updateCollectionGrid(a_params);

		showHideClearFilter();

	});



	var dTProductDealTimerStart = function() {
		if (document.querySelector(".dT_dealTimer")) {
			$(".dT_dealTimer").each(function(index) {

				var productID = $(this).attr('data-itemID');
				var targetTime = $(this).attr('data-time');

				$(".lof-clock-" + productID + "-detail").lofCountDown({
					TargetDate: targetTime,
					DisplayFormat: "<ul class='list-inline'><li class='day'>%%D%%<span>Days</span></li><li class='hours'>%%H%%<span>Hours</span></li><li class='mins'>%%M%%<span>Min</span></li><li class='seconds'>%%S%%<span>Sec</span></li></ul>",
					FinishMessage: "Expired"
				});
			});
		}
	};


	//-- default initCall
	showHideClearFilter();
	//-- deal Timer
	dTProductDealTimerStart();

	//-- 05 cart
	$(document).on("click", ".dT_AddToCartBtn", function(event) {
		event.preventDefault();
		var frmData = $(".shopify-product-form").serialize();
		dT_AddToCart(frmData);
	});

	$(document).on("click", ".dT_QuickAddToCartBtn", function(event) {
		event.preventDefault();

		var productVarientId = $(this).attr("data-product-varient-id");
		$(".dT_quickProductVarientId").val(productVarientId);

		var frmData = $(".shopify-product-quick-form").serialize();
		dT_QuickAddToCart(frmData);
	});


	$(document).on("submit", "#bundleAddToCartFrmId", function(event) {
		event.preventDefault();

		const setShopifyQue = function() {
			Shopify.queue = [];
			Shopify.isBundleDiscount = true;

			bundleProductIds.forEach(element => {
				var productId = element;
				var productVarientId = $("#bundle_product_price_" + productId).attr("data-varient-id");


				if (productVarientId != '' && $('#bundle_chk_' + productId).is(":checked")) {
					Shopify.queue.push({
						variantId: productVarientId,
					});
				} else {
					Shopify.isBundleDiscount = false;
				}
			});

		};

		const applyBundleDiscount = function(discount_code) {

			if (Shopify.isBundleDiscount == true) {
				axios.get('/discount/' + discount_code, {})
					.then(function(response) {

					});
			}
		};

		const doBundleAddToCart = function() {
			setShopifyQue();
			Shopify.moveAlong = function() {
				if (Shopify.queue.length) {
					var request = Shopify.queue.shift();

					var frmData = 'id=' + request.variantId + '&quantity=1';
					dT_AddToCartOther(frmData);

				} else {
					finalBundleCallBack();
				}
			};

			Shopify.moveAlong();
		};


		const finalBundleCallBack = function() {

			//-- apply discount
			var mainProductId = BUNDLE_MAIN_PRODUCT_ID;
			applyBundleDiscount('DT-DISCOUNT-' + mainProductId);

			//-- trigger mini cart link
			window.dTGeneral.showMiniCart();
		};

		Promise.resolve(doBundleAddToCart())
			.then(function() {

			});


	});

	/***
	 * 07 predictive search 
	 */

	var hideDT_SearchResultSection = function() {
		$(".dT_PredictiveSearchResult_Section").css('display', 'none');
	};

	var showDT_SearchResultSection = function() {
		$(".dT_PredictiveSearchResult_Section").css('display', 'block');
	};

	$(document).on("click", ".dT_SearchClose", function(event) {
		event.preventDefault();
		var self = jQuery(this);
		$("#SearchInput").val('');
		$("#SearchInput").focus();
		hideDT_SearchResultSection();

		self.css('display', 'none');
	});

	$(document).click(function() {
		hideDT_SearchResultSection();
	});

	$(".dT_TopStickySearchBtn").click(function(ev) {
		ev.preventDefault();
		$("#dT_top-sticky").slideDown('slow');
		scrollToCollectionTop();
	});

	$(".dT_TopStickySearchCloseBtn").click(function(ev) {
		ev.preventDefault();
		$("#dT_top-sticky").slideUp('slow');
	});


    setWishListCount();

})(jQuery);