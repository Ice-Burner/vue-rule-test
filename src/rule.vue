/*
 * 标尺组件
 * @Author: ljb
 * @Date: 2017-12-25 14:29:44
 * @Last Modified by: ljb
 * @Last Modified time: 2018-03-06 16:28:47
 */
<style lang="less" rel="stylesheet/less" type="text/less" scoped>

	/*手机设备宽*/
	@device-pixel: 750;  /*px*/
	@flexiable-js-device-width: 10rem; /*rem*/
	@rem-per-px: @flexiable-js-device-width / @device-pixel ;     /*每px等于的1/75rem*/

	.v-compoent-rule {
		.rule-point {
			// width: 28*@rem-per-px;
			// height: 20*@rem-per-px;
			margin: 0 auto 15px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.rule-content {
			width: 100%;
			// height: 72*@rem-per-px;
			background-image: url('~src/assets/img/ruler_weight_img.png');
			background-repeat: no-repeat;
			background-size: cover;
			box-shadow: 0 -5px 10px rgba(255, 96, 74, 0.35); //用于提交或添加的按钮和需要强调的字体
			;
		}
	}
</style>
<template>
<div id="v-compoent-rule">

	<div class="rule-point" :style="{'width': pointWidth,'height': pointHeight,'marginBottom':pointBottom}">
		<img :src="point_icon" alt="">
	</div>

	<div class="rule-content" data-name="rule" ref="rule" :style="{'height':ruleHeight}"></div>

</div>
</template>

<script>
export default {
	name: 'rule',
	props: {
		speed: {
			type: Number,
			default () {
				return 1;
			}
    },
    pointWidth: {
      type: String,
      default () {
				return 28*window.innerWidth / 750 + 'px';
			}
    },
    pointHeight: {
      type: String,
      default () {
				return 20*window.innerWidth / 750 + 'px';
			}
    },
    pointBottom: {
      type: String,
      default () {
				return 15*window.innerWidth / 750 + 'px';
			}
    },
    ruleHeight: {
      type: String,
      default () {
				return 72*window.innerWidth / 750 + 'px';
			}
    }
	},
	data: function() {
		return {

			point_icon: require('src/assets/img/point_weight_img.png'),

			img_width: 0, //图片宽

			client_width: 0, //屏幕宽

			current_x: 0, //初始X轴坐标

			start_x: 0, //开始的X轴坐标

			last_x: 0, //最终用于显示的X轴坐标

			diff_x: 0 //每次的X轴坐标差值

		}
	},
	mounted() {

		this.client_width = window.innerWidth;

		this.img_width = 2404 * window.innerWidth / 750;

		this.computeWeight(this.$refs.rule.style.backgroundPositionX);

		this.$refs.rule.addEventListener('touchmove', this.touchMoveEvent);

		this.$refs.rule.addEventListener('touchstart', this.touchStartEvent);

		this.$refs.rule.addEventListener('touchend', this.touchEndEvent);

	},
	beforeDestroy() {

		this.$refs.rule.removeEventListener('touchmove', this.touchMoveEvent);

		this.$refs.rule.removeEventListener('touchstart', this.touchStartEvent);

		this.$refs.rule.removeEventListener('touchend', this.touchEndEvent);

	},
	methods: {

		/**
		 * 长按开始的回调
		 * @param  {Object} e {事件对象}
		 * @return {undefined}
		 */
		touchStartEvent(e) {

			this.start_x = e.touches[0].pageX;

		},

		/**
		 * 长按结束的回调
		 * @return {undefined}
		 */
		touchEndEvent(e) {

			this.last_x = parseFloat(this.$refs.rule.style.backgroundPositionX.split('px').shift());

			if (this.last_x >= this.client_width / 2) {

				this.last_x = this.client_width / 2;

			} else if (this.last_x <= -(this.img_width - this.client_width / 2)) {

				this.last_x = -(this.img_width - this.client_width / 2);

			};

			this.computeWeight(this.last_x);

			this.$refs.rule.style.backgroundPositionX = this.last_x + 'px';

		},

		/**
		 * 长按拖动的回调
		 * @param  {Object} e {当前事件对象}
		 * @return {undefined}
		 */
		touchMoveEvent(e) {

			if (this.start_x !== e.touches[0].pageX) {

				let position_x;

				if (!this.last_x) {

					position_x = this.diff_x = this.speed * (parseFloat(e.touches[0].pageX) - parseFloat(this.start_x));

				} else {

					position_x = this.last_x;

					this.diff_x = parseFloat(e.touches[0].pageX) - parseFloat(this.start_x);

					position_x = this.last_x + this.speed * (parseFloat(e.touches[0].pageX) - parseFloat(this.start_x));

				}

				this.computeWeight(position_x);

				this.$refs.rule.style.backgroundPositionX = position_x + 'px';

			};

		},

		/**
		 * 计算重量
		 * @param  {number} x {x轴坐标长}
		 * @return {undefined}
		 */
		computeWeight(x) {

			const per_scale = this.img_width / 100; //每个刻度占的宽

			const start_weight = (this.client_width / 2) / per_scale; //初始的x轴

			const weight = -(x / per_scale - start_weight);

			this.$emit('update', weight);

		}

	}
}
</script>
