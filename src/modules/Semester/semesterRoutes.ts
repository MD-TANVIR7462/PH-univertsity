import  { Router } from 'express';
import { SemesterController } from './semester.controler';
const router = Router()

router.get('/',SemesterController.getSemester)
router.post("/",SemesterController.createSemester)
router.get('/:id')
router.put('/:id',)
router.delete('/:id')


export const SemestrRoutes = router