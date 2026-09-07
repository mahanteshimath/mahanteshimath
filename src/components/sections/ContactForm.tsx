import { useId, useState } from 'react'
import { contact, site } from '@/content'
import { Button } from '@/components/ui'
import styles from './ContactForm.module.css'

interface FormValues {
  name: string
  email: string
  subject: string
  message: string
}

type Errors = Partial<Record<keyof FormValues, string>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

const emptyValues: FormValues = { name: '', email: '', subject: '', message: '' }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values: FormValues): Errors {
  const errors: Errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'That email address does not look right.'
  }

  if (!values.subject.trim()) {
    errors.subject = 'Please add a subject.'
  }

  const message = values.message.trim()
  if (!message) {
    errors.message = 'Please write a message.'
  } else if (message.length < 20) {
    errors.message = 'A little more detail helps — 20 characters minimum.'
  }

  return errors
}

function openMailClient(values: FormValues) {
  const body = `${values.message}\n\n— ${values.name} (${values.email})`
  const url = `mailto:${site.email}?subject=${encodeURIComponent(
    values.subject,
  )}&body=${encodeURIComponent(body)}`
  window.location.href = url
}

export function ContactForm() {
  const fieldId = useId()
  const [values, setValues] = useState<FormValues>(emptyValues)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const update = (field: keyof FormValues) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((previous) => ({ ...previous, [field]: event.target.value }))
    // Clear the error as soon as the visitor starts correcting it.
    setErrors((previous) => ({ ...previous, [field]: undefined }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Hidden field: only bots fill this in.
    const honeypot = new FormData(event.currentTarget).get('company')
    if (honeypot) return

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      return
    }

    if (!contact.formEndpoint) {
      openMailClient(values)
      setStatus('success')
      setValues(emptyValues)
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })

      if (!response.ok) throw new Error(`Request failed: ${response.status}`)

      setStatus('success')
      setValues(emptyValues)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.successPanel} role="status">
        <p className={styles.successTitle}>Message sent</p>
        <p className={styles.successBody}>{contact.responseTime}</p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Send another
        </Button>
      </div>
    )
  }

  const describedBy = (field: keyof FormValues) =>
    errors[field] ? `${fieldId}-${field}-error` : undefined

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor={`${fieldId}-name`}>
            Name
          </label>
          <input
            id={`${fieldId}-name`}
            className={`${styles.input} ${errors.name ? styles.invalid : ''}`}
            type="text"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={update('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy('name')}
          />
          {errors.name ? (
            <p className={styles.error} id={`${fieldId}-name-error`}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`${fieldId}-email`}>
            Email
          </label>
          <input
            id={`${fieldId}-email`}
            className={`${styles.input} ${errors.email ? styles.invalid : ''}`}
            type="email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={update('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy('email')}
          />
          {errors.email ? (
            <p className={styles.error} id={`${fieldId}-email-error`}>
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor={`${fieldId}-subject`}>
          Subject
        </label>
        <input
          id={`${fieldId}-subject`}
          className={`${styles.input} ${errors.subject ? styles.invalid : ''}`}
          type="text"
          name="subject"
          value={values.subject}
          onChange={update('subject')}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={describedBy('subject')}
        />
        {errors.subject ? (
          <p className={styles.error} id={`${fieldId}-subject-error`}>
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor={`${fieldId}-message`}>
          Message
        </label>
        <textarea
          id={`${fieldId}-message`}
          className={`${styles.textarea} ${errors.message ? styles.invalid : ''}`}
          name="message"
          rows={5}
          value={values.message}
          onChange={update('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy('message')}
        />
        {errors.message ? (
          <p className={styles.error} id={`${fieldId}-message-error`}>
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Spam trap: hidden from people, tempting to bots. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor={`${fieldId}-company`}>Company</label>
        <input id={`${fieldId}-company`} name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' ? (
        <p className={styles.formError} role="alert">
          The message could not be sent. Please try again, or email{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a> directly.
        </p>
      ) : null}

      <Button
        type="submit"
        variant="accent"
        trailing="&#8594;"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending' : 'Send message'}
      </Button>
    </form>
  )
}
