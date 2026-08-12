function SubjectCard(props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:border-black transition">
      <h3 className="font-serif italic text-xl text-black mb-4">
        {props.name}
      </h3>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Tasks</span>
          <span className="font-medium text-black">{props.tasks}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Completed</span>
          <span className="font-medium text-black">{props.completed}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Progress</span>
          <span className="font-medium text-black">{props.progress}%</span>
        </div>
      </div>

      <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-black rounded-full transition-all duration-300"
          style={{ width: `${props.progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SubjectCard;
