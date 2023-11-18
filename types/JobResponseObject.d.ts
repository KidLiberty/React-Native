export declare interface JobResponseObject {
  employer_name: string | null
  employer_logo: string
  employer_company_type: string | null
  job_publisher: string | null
  job_id: string | null
  job_employment_type: string | null
  job_title: string | null
  job_apply_link: string | null
  job_apply_is_direct: boolean | null
  job_apply_quality_score: number | null
  job_description: string | null
  job_is_remote: boolean | null
  job_posted_at_timestamp: number | null
  job_posted_at_datetime_utc: string | null
  job_city: string | null
  job_state: string | null
  job_country: string | null
  job_latitude: number | null
  job_longitude: number | null
  job_benefits: string | null
  job_google_link: string | null
  job_offer_expiration_datetime_utc: string | null
  job_offer_expiration_timestamp: number | null
  job_required_experience: {
    no_experience_required: boolean | null
    required_experience_in_months: boolean | null
    experience_mentioned: boolean | null
    experience_preferred: boolean | null
  }
  no_experience_required: boolean | null
  required_experience_in_months: number | null
  experience_mentioned: boolean | null
  experience_preferred: boolean | null
  job_required_skills: string | null
  job_required_education: {
    postgraduate_degree: boolean | null
    professional_certification: boolean | null
    high_school: boolean | null
    associates_degree: boolean | null
    bachelors_degree: boolean | null
    degree_mentioned: boolean | null
    degree_preferred: boolean | null
  }
  job_experience_in_place_of_education: boolean | null
  job_min_salary: number | null
  job_max_salary: number | null
  job_salary_currency: string | null
  job_salary_period: string | null
  job_highlights: {
    Qualifications: {
      [key: number]: string | null
    }
    Responsibilities: {
      [key: number]: string | null
    }
    Benefits: {
      [key: number]: string | null
    }
  }
  job_job_title: string | null
  job_posting_language: string | null
  job_onet_soc: string | null
  job_onet_job_zone: string | null
  job_naics_code: string | null
  job_naics_name: string | null
}