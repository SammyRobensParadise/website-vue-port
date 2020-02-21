/**@format */
import axios from 'axios'
import DATA from '../../constants'

const GH_URL = `https://api.github.com/repos/${DATA.USERNAME}/${DATA.REPO_NAME}/commits/master`

const DataHandlers = {
  getGithubHistory: async () => {
    return await axios.get(GH_URL)
  },
}
export default { DataHandlers }
