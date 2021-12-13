(function ($) {
	"use strict";

	// Package Card Show Toggle
	$("#priceRangefilterBox .show-filterbox-btn").on("click", function () {
		$("#priceRangefilterBox").toggleClass("show");
	});
	
	// Package Card Show Toggle
	$("#networkBandwidthfilterBox .show-filterbox-btn").on("click", function () {
		$("#networkBandwidthfilterBox").toggleClass("show");
	});
	
	// Package Card Show Toggle
	$("#cacheBandwidthfilterBox .show-filterbox-btn").on("click", function () {
		$("#cacheBandwidthfilterBox").toggleClass("show");
	});

	// Package Card Show Toggle
	$("#specialAddonfilterBox .show-filterbox-btn").on("click", function () {
		$("#specialAddonfilterBox").toggleClass("show");
	});

	// Pacakge Price Range Filter
	{
		var priceFilterSlider = document.getElementById("priceRangefilter");
		var priceRangeParent = document.getElementById("priceRangefilterBox");
		var priceValues = [
			priceRangeParent.getElementsByClassName("startNum"),
			priceRangeParent.getElementsByClassName("endNum"),
		];
		noUiSlider.create(priceFilterSlider, {
			start: [1000, 2000],
			snap: false,
			connect: true,
			behaviour: "tap-drag",
			step: 500.1,
			range: {
				min: 500,
				max: 5000,
			},
			pips: {
				mode: "steps",
				density: 100,
				filter: 0,
			},

			format: {
				from: function (value) {
					return parseInt(value);
				},
				to: function (value) {
					return parseInt(value);
				},
			},
		});

		priceFilterSlider.noUiSlider.on("update", function () {
			let slider_values1 = priceFilterSlider.noUiSlider.get();
			for (let i = 0; i < priceValues.length; i++) {
				for (let j = 0; j < priceValues[i].length; j++) {
					priceValues[i][i].innerHTML = parseInt(slider_values1[0]);
					priceValues[i][j].innerHTML = parseInt(slider_values1[1]);
					priceValues[j][i].innerHTML = parseInt(slider_values1[0]);
					priceValues[i][j].innerHTML = parseInt(slider_values1[1]);
				}
			}
		});
	}

	// Network Bandwidth Range Filter
	{
		var netBandwidthSlider = document.getElementById("networkBandwidthfilter");
		var networkBandwidthfilterParent = document.getElementById(
			"networkBandwidthfilterBox"
		);
		var netBandwidthValues = [
			networkBandwidthfilterParent.getElementsByClassName("startNum"),
			networkBandwidthfilterParent.getElementsByClassName("endNum"),
		];

		noUiSlider.create(netBandwidthSlider, {
			start: 20,
			snap: false,
			connect: true,
			behaviour: "tap-drag",
			step: 10,
			range: {
				min: 10,
				max: 100,
			},
			pips: {
				mode: "steps",
				density: 10,
				filter: 0,
			},

			format: {
				from: function (value) {
					return parseInt(value);
				},
				to: function (value) {
					return parseInt(value);
				},
			},
		});

		netBandwidthSlider.noUiSlider.on("update", function () {
			let slider_values2 = netBandwidthSlider.noUiSlider.get();
			for (let i = 0; i < netBandwidthValues.length; i++) {
				netBandwidthValues[i][0].innerHTML = parseInt(slider_values2);
				netBandwidthValues[i][1].innerHTML = parseInt(slider_values2);
			}
		});
	}

	// Cache Bandwidth Range Filter
	{
		var cacheBandwidthSlider = document.getElementById("cacheBandwidthfilter");
		var cacheBandwidthfilterParent = document.getElementById("cacheBandwidthfilterBox");
		var cacheBandwidthValues = [
			cacheBandwidthfilterParent.getElementsByClassName("startNum"),
			cacheBandwidthfilterParent.getElementsByClassName("endNum"),
		];

		noUiSlider.create(cacheBandwidthSlider, {
			start: 40,
			snap: false,
			connect: true,
			behaviour: "tap-drag",
			step: 10,
			range: {
				min: 10,
				max: 100,
			},
			pips: {
				mode: "steps",
				density: 10,
				filter: 0,
			},

			format: {
				from: function (value) {
					return parseInt(value);
				},
				to: function (value) {
					return parseInt(value);
				},
			},
		});

		// console.log(cacheBandwidthValues);

		cacheBandwidthSlider.noUiSlider.on("update", function () {
			let slider_values3 = cacheBandwidthSlider.noUiSlider.get();
			for (let i = 0; i < cacheBandwidthValues.length; i++) {
				cacheBandwidthValues[i].innerHTML = parseInt(slider_values3);
				cacheBandwidthValues[i].innerHTML = parseInt(slider_values3);
			}

			console.log(cacheBandwidthValues);
		});
	}
})(window.jQuery);