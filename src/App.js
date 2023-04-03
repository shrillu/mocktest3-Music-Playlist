import {Component} from 'react'

import {BsSearch} from 'react-icons/bs'

import TrackItem from './components/TrackItem'

import './App.css'

const initialTracksList = [
  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-perfect-img.png',
    name: 'Perfect',
    genre: 'Pop',
    duration: '4:04',
  },
  {
    id: '40f97965-ff45-469e-a635-b2ef9f1642ed',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shape-of-you-img.png',
    name: 'Shape of You',
    genre: 'Divide',
    duration: '4:24',
  },
  {
    id: '782f916b-4056-44ec-a95f-5115c3f84904',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-visiting-hours.png',
    name: 'Visiting Hours',
    genre: 'Folk-Pop',
    duration: '3:49',
  },
  {
    id: 'fcf0dc77-3427-457c-9ee0-91b1dc39fece',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shivers-img.png',
    name: 'Shivers',
    genre: 'Dance-Pop',
    duration: '3:58',
  },
  {
    id: '9c1bb890-d4d5-4edf-9d95-6959d716b442',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-bad-habits-img.png',
    name: 'Bad Habits',
    genre: 'Dance-Pop',
    duration: '4:01',
  },
  {
    id: '2216db9c-647f-4814-b880-179740e4d748',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-castle-on-the-hill-img.png',
    name: 'Castle on the Hill',
    genre: 'Pop&Rock',
    duration: '4:48',
  },
  {
    id: 'a5e30966-b760-4660-bf08-073135f7d010',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-happier-img.png',
    name: 'Happier',
    genre: 'Pop',
    duration: '3:36',
  },
  {
    id: '2d5c9bc0-b8b0-41c6-aa55-cb3b659d8604',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-photograph-img.png',
    name: 'Photograph',
    genre: 'Folk music',
    duration: '4:26',
  },
  {
    id: 'efd3d621-2c05-4941-acdc-0a1a0786bc53',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-galway-girl-img.png',
    name: 'Galway Girl',
    genre: 'Pop',
    duration: '3:20',
  },
  {
    id: 'e4b8e3b8-7776-4c09-8abc-ba328a8babe9',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-i-dont-care-img.png',
    name: "I Don't Care",
    genre: 'Pop',
    duration: '3:38',
  },
]

// Replace your code here

class App extends Component {
  state = {
    inputValue: '',
    tracksList: initialTracksList,
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  searchInput = () => {
    const {inputValue} = this.state
    const itemsList = initialTracksList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(inputValue.toLowerCase()),
    )

    this.setState({tracksList: itemsList})

    console.log(itemsList)
  }

  onClickDelete = id => {
    const {tracksList} = this.state
    const deleteList = tracksList.filter(eachItem => eachItem.id !== id)

    this.setState({tracksList: deleteList})
  }

  render() {
    const {inputValue, tracksList} = this.state

    const isNotFound = tracksList.length <= 0

    return (
      <div>
        <div className="singer-container">
          <h1 style={{marginBottom: '0', fontSize: '34px'}}>Ed Sheeran</h1>
          <p style={{marginTop: '0', fontSize: '24px'}}>Singer</p>
        </div>
        <div className="bottom-container">
          <div className="input-container">
            <h1
              style={{
                color: '#ffffff',
                fontSize: '26px',
              }}
            >
              Songs Playlist
            </h1>
            <div className="search-input-container">
              <input
                type="search"
                className="input-box"
                placeholder="Search"
                onChange={this.onChangeInput}
                value={inputValue}
              />
              <button
                type="button"
                data-testid="searchButton"
                className="search-icon-button"
                onClick={this.searchInput}
              >
                <BsSearch className="search-icon" />
              </button>
            </div>
          </div>

          {isNotFound ? (
            <p
              style={{
                color: '#ffffff',
                fontSize: '30px',
                textAlign: 'center',
                marginTop: '50px',
              }}
            >
              No Songs Found
            </p>
          ) : (
            <ul className="ul-container">
              {tracksList.map(eachItem => (
                <TrackItem
                  items={eachItem}
                  key={eachItem.id}
                  onClickDelete={this.onClickDelete}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
