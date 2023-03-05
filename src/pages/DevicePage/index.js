import {defineAsyncComponent} from 'vue'
import LoadingSpinner from '../../shared/ui/LoadinSpinner/LoadingSpinner.vue'
import ErrorComponent from '../../shared/ui/ErrorComponent/ErrorComponent.vue'

export const DevicePage = defineAsyncComponent({
    loader: () => import('./ui/DevicePage.vue'),
    loadingComponent: LoadingSpinner,
    delay: 200,
    errorComponent: ErrorComponent,
    timeout: 3000
  })