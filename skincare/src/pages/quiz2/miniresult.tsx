const functions = {
    sortRoutine: (skinInfo: any) => {
        if (skinInfo.isSensitive == "true" || skinInfo.acneLevel == "high" || skinInfo.acneLevel == "some" || skinInfo.mainGoal == "rosacea") {
            return "repairing"
        } else {
            return skinInfo.skintype
        }
    }
}
module.exports = functions;