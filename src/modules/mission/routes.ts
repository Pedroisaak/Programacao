import { Router } from "express";
import { Controller } from "../../sharred/adapters/express-route-controller-adapter";
import {
  createMission,
  deleteMission,
  listMission,
  showMission,
  updateMission,
} from "./controller/missionController";
import {
  createMissionSchema,
  updateMissionSchema,
  showMissionSchema,
  deleteMissionSchema,
} from "./validators";

export default (router: Router): Router => {
  router.get("/v1/mission", Controller(listMission));
  router.post("/v1/mission", Controller(createMission, createMissionSchema));
  router.get("/v1/mission/:id", Controller(showMission, showMissionSchema));
  router.put("/v1/mission/:id", Controller(updateMission, updateMissionSchema));
  router.delete(
    "/v1/mission/:id",
    Controller(deleteMission, deleteMissionSchema)
  );

  return router;
};