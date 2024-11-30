import { Field } from 'formik'
import React, { FC } from 'react'

interface ICustomFormikField {
    label: string
    name: string
    errorsName: string | undefined
    touchedName: boolean | undefined
}
const CustomFormikField: FC<ICustomFormikField> = ({ label, name, errorsName, touchedName }) => {
    return (
        <div className='flex flex-col w-full'>
            <Field
                id={name}
                name={name}
                placeholder={label}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
            {errorsName && touchedName ? (
                <div className='text-red-500 text-sm ml-3'>{errorsName}</div>
            ) : null}
        </div>
    )
}

export default CustomFormikField