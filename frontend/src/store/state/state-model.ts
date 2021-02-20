/* eslint-disable */
/**
 *
 * Notes
 * JSTOTS - javascript to typescript Conversation
 * Just moved all action from index.js to action-madel file
 * No changes in functionality or any variables
 * this is just moving
 * in Future have to extract all functions and export Individually with typs defined
 * and import in index.ts
 *
 */
import { StateModelIF } from '@/interfaces'

export const stateModel: StateModelIF = {
  addExamModal: {
    visible: false,
    setup: null,
    step1MenuOpen: false,
    office_number: null
  },
  addModalForm: {
    citizen: '',
    comments: '',
    channel: '',
    search: '',
    category: '',
    service: '',
    suspendFilter: false,
    selectedItem: '',
    priority: 2,
    counter: null
  },
  addModalSetup: null,
  addNextService: false,
  adminNavigation: '',
  appointmentsStateInfo: {
    channel_id: null,
    service_id: null
  },
  apptRescheduleCancel: false,
  alertMessage: '',
  allCitizens: [],
  backOfficeDisplay: 'BackOffice',
  recurringFeatureFlag: '',
  bearer: '',
  bookings: [],
  calendarEvents: [],
  calendarSetup: null,
  examBcmpJobId: null,
  capturedExam: {},
  captureITAExamTabSetup: {
    step: 1,
    highestStep: 1,
    stepsValidated: [],
    errors: [],
    showRadio: true,
    status: 'unknown',
    notes: false,
    capturePayee: false,
    capturePayeeSentReceipt: false
  },
  categories: [],
  channels: [],
  citizenButtons: false,
  citizenInvited: false,
  citizens: [],
  clickedDate: '',
  csr_states: [],
  csrs: [],
  dismissCount: 0,
  diskspace: {},
  displayServices: 'All',
  editDeleteSeries: false,
  editedBooking: null,
  editedBookingOriginal: null,
  editedGroupBooking: null,
  editExamFailureCount: 0,
  editExamSuccessCount: 0,
  examAlertMessage: '',
  examDismissCount: 0,
  examEditFailureMessage: '',
  examEditSuccessMessage: '',
  exams: [],
  event_ids: null,
  event_id_warning: false,
  examsTrackingIP: false,
  examSuccessDismiss: 0,
  examTypes: [],
  feedbackMessage: '',
  iframeLogedIn: false,
  inventoryFilters: {
    expiryFilter: 'current',
    scheduledFilter: 'both',
    groupFilter: 'both',
    returnedFilter: 'unreturned',
    office_number: 'default',
    requireAttentionFilter: 'default',
    requireOEMAttentionFilter: 'default',
    receptSentFilter: 'default',
    uploadFilter: 'default'
  },
  invigilators: [],
  pesticide_invigilators: [],
  pesticide_offsite_invigilators: [],
  shadowInvigilators: [],
  isLoggedIn: false,
  isUploadingFile: false,
  isAppointmentEditMode: false,
  manifestdata: '',
  loginAlertMessage: '',
  loginDismissCount: 0,
  nonITAExam: false,
  nowServing: false,
  officeFilter: null,
  offices: [],
  officeType: null,
  offsiteOnly: false,
  offsiteVisible: true,
  performingAction: false,
  rescheduling: false,
  returnExam: null,
  roomResources: [],
  rooms: [],
  scheduling: false,
  selectedExam: {},
  selectedExamType: '',
  selectedExamTypeFilter: '',
  selectedQuickAction: '',
  selectedQuickActionFilter: '',
  selectedOffice: {},
  selectionIndicator: false,
  serveModalAlert: '',
  serveNowAltAction: false,
  serveNowStyle: 'btn-primary',
  serviceBegun: false,
  serviceModalForm: {
    citizen_id: null,
    service_citizen: null,
    citizen_comments: '',
    activeQuantity: 1,
    accurate_time_ind: 1,
    priority: 2,
    counter: 1
  },
  services: [],
  showAddModal: false,
  showAdmin: false,
  showAppointmentBlackoutModal: false,
  showEditApptModal: false,
  showBookingModal: false,
  showBookingBlackoutModal: false,
  showDeleteExamModal: false,
  showEditBookingModal: false,
  showEditExamModal: false,
  showEditGroupBookingModal: false,
  showExamInventoryModal: false,
  showFeedbackModal: false,
  showGAScreenModal: false,
  showAgendaScreenModal: false,
  showGenFinReportModal: false,
  showOtherBookingModal: false,
  showResponseModal: false,
  showReturnExamModal: false,
  showSelectInvigilatorModal: false,
  showServeCitizenSpinner: false,
  showInviteCitizenSpinner: false,
  showServiceModal: false,
  showTimeTrackingIcon: false,
  showOfficeSwitcher: false,
  user: {
    counter_id: null,
    csr_id: null,
    csr_state_id: null,
    csr_state: {
      csr_state_desc: null,
      csr_state_id: null,
      csr_state_name: null
    },
    username: null,
    office: {
      office_id: null,
      office_name: null,
      sb: {
        sb_type: null
      },
      counters: [],
      quick_list: [],
      back_office_list: []
    },
    office_id: null,
    receptionist_ind: null
  },
  userLoadingFail: false,
  videofiles: [],
  
  apiCallTotal: 0
  
}
