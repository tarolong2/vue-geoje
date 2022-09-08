import { createStore} from 'vuex'
import axios from 'axios'

// vuex 는 데이터를 보관하고, 
// 업데이트 한 이후에 
// 컴포넌트에서 필요로 한 데이터를 참조한다. 
// 공통 데이터 저장소(state)

export default createStore(
  {
    // 데이터
    state: {
      menuDataArr: [],
      visualDataArr: [],
      galleryDataArr: [],
      movieData: {},
      infoDataArr: [],
      newsDataArr: [],
      bannerDataArr: []
    },

    // 외부 json 및 서버연동
    // axios 호출 시점
    // mutation 을 commit 으로 호출하면서 데이터를 전달한다.
    actions: {
      
      // 메뉴데이터 가져오기
      fetchGetMenu({commit}) {
        axios.get('./data/menu.json')
        .then(res => {
          // console.log(res.data);
          commit('UPDATE_MENU_DATA', res.data);
        })
        .catch(err => console.log(err))
      },

      // 비주얼데이터 가져오기
      fetchGetVisual({commit}) {
        axios.get('./data/visual.json')
        .then(res => {
          // console.log(res.data);
          commit('UPDATE_VISUAL_DATA', res.data);
        })
        .catch(err => console.log(err))
      },
      // 갤러리데이터 가져오기
      fetchGetGallery({commit}) {
        axios.get('./data/gallery.json')
        .then(res => {
          // console.log(res.data);
          commit('UPDATE_GALLERY_DATA', res.data);
        })
        .catch(err => console.log(err))
      },

      // 무비데이터 가져오기
      fetchGetMovie({commit}) {
        axios.get('./data/movie.json')
        .then(res => {
          // console.log(res.data);
          commit('UPDATE_MOVIE_DATA', res.data);
        })
        .catch(err => console.log(err))
      },
      // 소식 가져오기
      fetchGetInfo({commit}) {
        axios.get('./data/info.json')
        .then(res => {
          // console.log(res.data);
          commit('UPDATE_INFO_DATA', res.data);
        })
        .catch(err => console.log(err))
      },
      // 뉴스 가져오기
      fetchGetNews({commit}) {
        axios.get('./data/news.json')
        .then(res => {
          // console.log(res.data);
          commit('UPDATE_NEWS_DATA', res.data);
        })
        .catch(err => console.log(err))
      },
      // 배너 가져오기
      fetchGetBanner({commit}) {
        axios.get('./data/banner.json')
        .then(res => {
          // console.log(res.data);
          commit('UPDATE_BANNER_DATA', res.data);
        })
        .catch(err => console.log(err))
      }

    },

    // actions 로 부터 데이터를 전송받고 state 를 업데이트한다.
    mutations: {
      // 메뉴데이터(state)를 업데이트 한다.
      UPDATE_MENU_DATA(state, payload) {
        state.menuDataArr = payload
      },
      // 비주얼데이터(state)를 업데이트 한다.
      UPDATE_VISUAL_DATA(state, payload) {
        state.visualDataArr = payload
      },
      // 갤러리데이터(state)를 업데이트 한다.
      UPDATE_GALLERY_DATA(state, payload) {
        state.galleryDataArr = payload
      },
      // 무비데이터(state)를 업데이트 한다.
      UPDATE_MOVIE_DATA(state, payload) {
        state.movieData = payload
      },
      // 소식데이터(state)를 업데이트 한다.
      UPDATE_INFO_DATA(state, payload) {
        state.infoDataArr = payload
      },
      // 뉴스데이터(state)를 업데이트 한다.
      UPDATE_NEWS_DATA(state, payload) {
        state.newsDataArr = payload
      },
      // 배너데이터(state)를 업데이트 한다.
      UPDATE_BANNER_DATA(state, payload) {
        state.bannerDataArr = payload
      }
    },

    // 외부 컴포넌트에서 state 를 참조할때 활용
    // state 가 바뀌면 즉시 반영을 위해서 외부 컴포넌트는 
    // computed 로 처리하는 것이 일반적.
    getters: {
      menuData(state) {
        return state.menuDataArr
      },
      visualData(state) {
        return state.visualDataArr
      },
      galleryData(state) {
        return state.galleryDataArr
      },
      movieData(state) {
        return state.movieData
      },
      infoData(state) {
        return state.infoDataArr
      },
      newsData(state) {
        return state.newsDataArr
      },
      bannerData(state) {
        return state.bannerDataArr
      }
    }
  }
)