// useResultEva.tsx
import { NavigationProp } from '@react-navigation/native';
import { usePreQuiz } from '../../PreQuizScreen/hooks/usePreQuizLogic.js'; 
import { useAuth } from '../../../../../context/AuthContext';
import { sendPreQuizResult , updateQuizResult , getPrequizzCourseId} from '../../../../../services/prequizzresult.service.js';
