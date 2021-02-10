//initialize the goodiese

export const initAd = () => {
  if (process.env.REACT_APP_ADMOB_BANNER_ANDROID) {
    initialize('banner', process.env.REACT_APP_ADMOB_BANNER_ANDROID)
  }
  if (process.env.REACT_APP_ADMOB_INTERSTITIAL_ANDROID) {
    initialize('interstitial', process.env.REACT_APP_ADMOB_INTERSTITIAL_ANDROID)
  }
  if (process.env.REACT_APP_ADMOB_REWARDVIDEO_ANDROID) {
    initialize('rewardvideo', process.env.REACT_APP_ADMOB_REWARDVIDEO_ANDROID)
  }
}

const initialize = (
  targetAd: 'banner' | 'interstitial' | 'rewardvideo',
  id: string,
  autoShow = true
) => {
  const w: any = window
  w.admob[targetAd].config({
    id,
    isTesting: false,
    autoShow,
  })
  w.admob[targetAd].prepare()
}

export const showAd = (targetAd: 'banner' | 'interstitial' | 'rewardvideo') => {
  const w: any = window
  w.admob[targetAd].show()
}

export const hideAd = (targetAd: 'banner' | 'interstitial' | 'rewardvideo') => {
  const w: any = window
  w.admob[targetAd].hide()
}

export const removeAd = (
  targetAd: 'banner' | 'interstitial' | 'rewardvideo'
) => {
  const w: any = window
  w.admob[targetAd].remove()
}
