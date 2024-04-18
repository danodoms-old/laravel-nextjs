export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      //   style={{
      //     backgroundImage:
      //       "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      //   }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Time Sync</h1>
          <p className="mb-5">Centralized Timetable for Class Schedules</p>

          <button className="btn btn-primary">
            <a href="/schedule">View Schedule</a>
          </button>
          <button className="btn btn-primary">
            <a href="/schedule/create">Create Schedule</a>
          </button>
        </div>
      </div>
    </div>
  );
}
