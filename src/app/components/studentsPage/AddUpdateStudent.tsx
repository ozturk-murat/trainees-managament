import React from "react";
import { useForm } from "react-hook-form";

type AddUpdateStudentProps = {
  onClose: () => void;
  onSave: (data: any) => void;
  defaultValues?: any;
};

const AddUpdateStudent: React.FC<AddUpdateStudentProps> = React.memo(
  ({ onClose, onSave, defaultValues }) => {
    const { register, handleSubmit, formState } = useForm({
      defaultValues,
    });

    const onSubmit = (data: any) => {
      onSave(data);
      onClose();
    };

    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 w-6/12">
          <h2 className="text-lg font-bold mb-4">Add/Update Student</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">Name</label>
              <input
                type="text"
                className="w-full rounded-lg border border-neutral-200 p-2"
                {...register("firstName", { required: true })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">Email</label>
              <input
                type="email"
                className="w-full rounded-lg border border-neutral-200 p-2"
                {...register("email", { required: true })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">Phone</label>
              <input
                type="text"
                className="w-full rounded-lg border border-neutral-200 p-2"
                {...register("phone", { required: true })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">Website</label>
              <input
                type="text"
                className="w-full rounded-lg border border-neutral-200 p-2"
                {...register("domain", { required: true })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">
                Company Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-neutral-200 p-2"
                {...register("company.name", { required: true })}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="mr-2 bg-gray-200 hover:bg-gray-300 rounded-lg px-4 py-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-4 py-2"
                disabled={formState.isSubmitting}
              >
                {defaultValues ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
);

export default AddUpdateStudent;
