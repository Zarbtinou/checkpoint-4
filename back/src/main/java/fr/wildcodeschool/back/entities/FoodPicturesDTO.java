package fr.wildcodeschool.back.entities;

public class FoodPicturesDTO {

  private String url;
  private long foodId;

  FoodPicturesDTO() {}

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public long getFoodId() {
    return foodId;
  }

  public void setFoodId(long foodId) {
    this.foodId = foodId;
  }
}
