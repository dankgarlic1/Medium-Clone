import Avatar from "./shared/Avatar";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-2">
      <div>Medium</div>
      <div>
        <Avatar initials={"HR"} />
      </div>
    </div>
  );
};
