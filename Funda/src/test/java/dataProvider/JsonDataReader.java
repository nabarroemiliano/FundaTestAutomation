package dataProvider;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import com.google.gson.Gson;

import managers.FileReaderManager;
import testDataTypes.Search;

public class JsonDataReader {

	private final String searchFilePath = FileReaderManager.getInstance().getConfigReader().getTestDataResourcePath() + "Search.json";
	private List<Search> searchList;
	
	public JsonDataReader(){
		searchList = getSearchData();
	}
	
	private List<Search> getSearchData() {
		Gson gson = new Gson();
		BufferedReader bufferReader = null;
		try {
			bufferReader = new BufferedReader(new FileReader(searchFilePath));
			Search[] searches = gson.fromJson(bufferReader, Search[].class);
			return Arrays.asList(searches);
		}catch(FileNotFoundException e) {
			throw new RuntimeException("Json file not found at path : " + searchFilePath);
		}finally {
			try { if(bufferReader != null) bufferReader.close();}
			catch (IOException ignore) {}
		}
	}
		
	public final Search getCityByName(String cityName){
			 return searchList.stream().filter(x -> x.city.equalsIgnoreCase(cityName)).findAny().get();
	}
	
}
