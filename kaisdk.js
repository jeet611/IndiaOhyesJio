if (navigator.userAgent.toLowerCase().indexOf('kaios') > -1){
  getKaiAd({
  	publisher: '',
  	app: 'HolloVibe',
  	slot: 'HolloVibe',
    timeout: '6000',
    test: 0,

  	h: 264,
  	w: 230,

  	// Max supported size is 240x264
  	// container is required for responsive ads
  	container: document.getElementById('ad-container'),
  	onerror: err => console.error('Custom catch:', err),
  	onready: ad => {

  		// Ad is ready to be displayed
  		// calling 'display' will display the ad
  		ad.call('display', {

  			// In KaiOS the app developer is responsible
  			// for user navigation, and can provide
  			// navigational className and/or a tabindex
  			tabindex: 0,

  			// if the application is using
  			// a classname to navigate
  			// this classname will be applied
  			// to the container
  			navClass: 'items',

  			// display style will be applied
  			// to the container block or inline-block
  			display: 'block',
  		})
  	}
  })
}
