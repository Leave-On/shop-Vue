import {defineAsyncComponent} from 'vue'
import LoadingSpinner from '../../shared/ui/LoadinSpinner/LoadingSpinner.vue'
import ErrorComponent from '../../shared/ui/ErrorComponent/ErrorComponent.vue'

export const AdminPage = defineAsyncComponent({
    loader: () => import('./ui/AdminPage.vue'),
    loadingComponent: LoadingSpinner,
    delay: 200,
    errorComponent: ErrorComponent,
    timeout: 3000
  })