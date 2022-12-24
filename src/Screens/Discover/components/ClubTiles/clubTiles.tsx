import { NavLink } from "react-router-dom";
import ClubTile from "./clubTile";

const ClubTiles = () => {
  return (
    <>
      <div className="grid grid-flow-row gap-4 my-6 mx-6 md:ml-8 xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
        <NavLink to="/club">
          <ClubTile />
        </NavLink>
        <NavLink to="/club">
          <ClubTile />
        </NavLink>
        <NavLink to="/club">
          <ClubTile />
        </NavLink>
        <NavLink to="/club">
          <ClubTile />
        </NavLink>
        <NavLink to="/club">
          <ClubTile />
        </NavLink>
        <NavLink to="/club">
          <ClubTile />
        </NavLink>
        <NavLink to="/club">
          <ClubTile />
        </NavLink>
      </div>
    </>
  );
};

export default ClubTiles;
