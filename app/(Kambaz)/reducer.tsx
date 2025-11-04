interface Enrollment {
  course: string;
}

const initialEnrollmentsState: { enrollments: Enrollment[] } = {
  enrollments: [],
};

export const enrollmentsReducer = (
  state = initialEnrollmentsState,
  action: any
) => {
  switch (action.type) {
    case "ENROLL_IN_COURSE":
      return {
        ...state,
        enrollments: [...state.enrollments, action.payload],
      };
    case "UNENROLL_FROM_COURSE":
      return {
        ...state,
        enrollments: state.enrollments.filter(
          (enrollment) => enrollment.course !== action.payload.course
        ),
      };
    default:
      return state;
  }
};
