'use client'
import style from './FormForContacts.module.scss'
import {useForm} from "react-hook-form";
import {FormType, formValidation} from "@/components/formForContacts/utils/formValidation";
import {zodResolver} from '@hookform/resolvers/zod'
import {toast} from "react-toastify";

const FormForContacts = () => {
    const {
        handleSubmit,
        register,
        formState: {errors}
    } = useForm<FormType>(
        {resolver: zodResolver(formValidation)}
    )
    const onSubmit = (data: FormType) => {
        toast.success('You message has been send')
        console.log(data)
    }
    return (
        <div className={style.formContants}>
            <form onSubmit={handleSubmit(onSubmit)} className={style.inputBlockInfo}>
                <div>

                    <div>
                        {errors.fullName && <div className={style.errorMessage}>{errors.fullName.message}</div>}
                        <input {...register('fullName')} placeholder="Full Name*"/>
                    </div>
                    <div>
                        {errors.email && <div className={style.errorMessage}>{errors.email.message}</div>}
                        <input{...register('email')} placeholder="Email Adress*"/>
                    </div>
                </div>
                <div>

                    <div>
                        {errors.phone && <div className={style.errorMessage}>{errors.phone.message}</div>}
                        <input {...register('phone')} placeholder="Phone Number*"/>
                    </div>
                    <div>
                        {errors.subjectMessage &&
                            <div className={style.errorMessage}>{errors.subjectMessage.message}</div>}
                        <input {...register('subjectMessage')} placeholder="Subject*"/>
                    </div>
                </div>
                <textarea
                    {...register('message')}
                    className={style.userMessage}
                    placeholder="Your Message"
                />
                <button
                    type="submit"
                >
                    Get An Appointment
                </button>
            </form>
        </div>
    );
};

export default FormForContacts;