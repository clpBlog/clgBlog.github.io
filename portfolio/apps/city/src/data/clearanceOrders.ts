export type ClearanceStatus =
  | 'pending'
  | 'dispatched'
  | 'open'
  | 'accepted'
  | 'in_service'
  | 'awaiting_confirm'
  | 'completed'
  | 'cancelled'

export const STATUS_META: Record<
  ClearanceStatus,
  { label: string; tone: 'warn' | 'info' | 'primary' | 'success' | 'muted' }
> = {
  pending: { label: '待处理', tone: 'warn' },
  dispatched: { label: '已派·待接', tone: 'info' },
  open: { label: '抢单池', tone: 'info' },
  accepted: { label: '已接单', tone: 'primary' },
  in_service: { label: '服务中', tone: 'primary' },
  awaiting_confirm: { label: '待居民确认', tone: 'warn' },
  completed: { label: '已完成', tone: 'success' },
  cancelled: { label: '已取消', tone: 'muted' },
}

export function formatScheduleLabel(iso: string) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const hour = d.getHours()
  const minute = String(d.getMinutes()).padStart(2, '0')
  const period = hour < 12 ? '上午' : '下午'
  const h12 = hour % 12 || 12
  return `${day}/${month} ${period}-${String(h12).padStart(2, '0')}:${minute}`
}

export function formatMoney(amount: number) {
  return `HK$ ${amount.toLocaleString('en-HK')}`
}
