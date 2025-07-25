import type { Component } from 'vue'

export type TabKey = 'General' | 'Notifications' | 'Privacy'

export interface Tab {
  key: string
  label: string
  component: Component
}
