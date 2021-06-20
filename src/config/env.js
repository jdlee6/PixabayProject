import {API_KEY, PIXABAY_URL} from "@env"

const devEnvironmentVariables = {
  API_KEY,
  PIXABAY_URL
}

export default __DEV__ ? devEnvironmentVariables : null