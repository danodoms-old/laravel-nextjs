export default function CreateSchedulePage() {
  return (
    <section className="flex flex-col h-dvh bg-base-100 p-4 gap-2">
      <h1 className="flex-initial font-bold text-2xl">Add Schedule</h1>
      <form action="" className="flex flex-col gap-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Course Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter course name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor</span>
          </label>
          <input
            type="text"
            placeholder="Enter instructor's name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Time</span>
          </label>
          <input type="time" className="input input-bordered" />
        </div>
        <a type="submit" href="/schedule" className="btn btn-primary">
          Submit
        </a>
      </form>
    </section>
  );
}
