import { SEMESTER_CHOICES } from './application'

export const formMap = formData => [
  {
    displayName: 'Name',
    value: formData?.student?.name,
    type: 'text'
  },
  {
    displayName: 'Enrollment Number',
    value: formData?.student?.enrollment_number,
    type: 'text'
  },
  {
    displayName: 'Email ID',
    value: formData?.student?.email,
    type: 'text'
  },
  {
    displayName: 'Mobile Number',
    value: formData?.phone_number,
    type: 'text'
  },
  {
    displayName: 'Branch',
    value: formData?.student?.branch,
    type: 'text'
  },
  {
    displayName: 'Semester Applied For',
    value: formData?.applied_semester,
    type: 'choice',
    choices: SEMESTER_CHOICES
  },
  {
    displayName: 'Supervisor Email',
    value: formData?.supervisor_email,
    type: 'text'
  },
  {
    displayName: 'HOD Email',
    value: formData?.hod_email,
    type: 'text'
  },
  {
    displayName: 'Application Form',
    value: formData?.application_form,
    type: 'file'
  },
  {
    displayName: 'Extension Letter',
    value: formData?.extension_letter,
    type: 'file'
  },
  {
    displayName: 'Academic Summary',
    value: formData?.academic_summary,
    type: 'file'
  }
]
