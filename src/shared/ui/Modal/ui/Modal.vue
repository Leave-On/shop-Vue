<template>
    <div class="modal" v-if="showModal">
        <div class='modal-overlay' @click.self='hideModal'>
            <div class="modal-container">
                <div class="modal-header">
                    <h2>{{ title }}</h2>
                    <button class="modal-close" @click="hideModal">×</button>
                </div>
                <div class="modal-content">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <button class="modal-btn" @click="hideModal">
                        {{ closeBtnText }}
                    </button>
                    <button class="modal-btn modal-btn-primary" @click="confirm">
                        {{ confirmBtnText }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    showModal: {
        type: Boolean,
        required: true
    },
    closeBtnText: {
        type: String,
        default: 'Abort mission'
    },
    confirmBtnText: {
        type: String,
        default: 'Confirm'
    }
})

const emits = defineEmits(['hideModal', 'confirm'])

const hideModal = () => emits('hideModal')

const confirm = () => emits('confirm')

</script>

<style scoped>
@import './Modal.css'
</style>
