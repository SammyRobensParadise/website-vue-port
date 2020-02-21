/**@format */

import DATA from '../../constants'
const ERR = "403 Error: Unable to Reach Github's server"
const GH = 'github'

const DataHandlers = {
  /**
   * gets last commit date from github
   * @param {String} api
   * @returns Date
   * @readonly
   */
  getDataFromGithub(api) {
    if (api === GH) {
      try {
        const xmlhttp = new XMLHttpRequest()
        xmlhttp.onreadystatechange = () => {
          if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            const gitRef = JSON.parse(xmlhttp.responseText)
            let { date } = gitRef.commit.author
            date = date.substring(0, 10)
            return date
          } else {
            return ERR
          }
        }
        xmlhttp.open(
          'GET',
          `https://api.github.com/repos/${DATA.USERNAME}/${DATA.REPO_NAME}/commits/master`,
          true,
        )
        xmlhttp.send()
      } catch (error) {
        return error
      }
    } else {
      return ERR
    }
  },
}
export default { DataHandlers }
